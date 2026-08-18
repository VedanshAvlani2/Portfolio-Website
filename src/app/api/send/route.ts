import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

// Instantiated lazily: `new Resend(undefined)` throws at module load, which
// breaks `next build` entirely when RESEND_API_KEY is absent (fresh clones, CI,
// or a rotated key on Vercel). Now a missing key degrades to a 500 on this one
// route instead of taking down the whole deploy.
function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Received data:", body);

    const {
      success: zodSuccess,
      data: zodData,
      error: zodError,
    } = Email.safeParse(body);

    if (!zodSuccess) {
      console.error("Validation error:", zodError);
      return Response.json(
        { error: zodError.errors[0].message },
        { status: 400 }
      );
    }

    const resend = getResend();
    if (!resend) {
      console.error("RESEND_API_KEY is not set; cannot send email.");
      return Response.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    console.log("Sending email...");
    const { data: resendData, error: resendError } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [config.email],
      subject: `Portfolio Contact from ${zodData.fullName}`,
      react: EmailTemplate({
        fullName: zodData.fullName,
        email: zodData.email,
        message: zodData.message,
      }),
    });

    if (resendError) {
      console.error("Resend error:", resendError);
      return Response.json({ error: resendError.message }, { status: 500 });
    }

    console.log("Email sent successfully:", resendData);
    return Response.json({ success: true, data: resendData });
  } catch (error) {
    console.error("Server error:", error);
    return Response.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}