import React from "react";
import ContactForm from "@/components/ContactForm";

// If the above doesn't work, try:
// import ContactForm from "../../../components/ContactForm";

function Page() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md w-full">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-zinc-200">
          Contact Me
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a project in mind? Want to collaborate? Or just want to say hi? 
          Drop me a message!
        </p>
        <ContactForm />
      </div>
    </section>
  );
}

export default Page;