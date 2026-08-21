"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ROLES, Role } from "@/data/experience";

/**
 * Sits between Skills and Projects. Deliberately has NO background of its own:
 * the fixed Spline keyboard in AnimatedBackground floats behind it, exactly as
 * it does behind Projects and Contact. Cards use bg-black/70 + backdrop-blur so
 * the keyboard reads through the gaps rather than being covered by a panel.
 */
const ExperienceSection = () => {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-4 pb-32">
      <Link href={"#experience"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
          )}
        >
          Experience
        </h2>
      </Link>
      <p className="mt-4 mb-20 text-center font-mono text-xs md:text-sm uppercase tracking-[0.14em] text-neutral-500">
        2023 to 2026
      </p>

      <div className="mx-auto max-w-4xl">
        {ROLES.map((role, i) => (
          <RoleRow key={role.id} role={role} isLast={i === ROLES.length - 1} />
        ))}
      </div>

    </section>
  );
};

const RoleRow = ({ role, isLast }: { role: Role; isLast: boolean }) => {
  return (
    <div className="grid grid-cols-[76px_1px_minmax(0,1fr)] md:grid-cols-[168px_1px_minmax(0,1fr)]">
      {/* date rail */}
      <div className="pr-4 pt-1 text-right md:pr-7">
        <p className="font-mono text-[10px] font-medium tracking-wider text-white md:text-xs">
          {role.start}
        </p>
        <p className="mt-0.5 font-mono text-[10px] tracking-wider text-neutral-400 md:text-xs">
          {role.end}
        </p>
      </div>

      {/* spine */}
      <div
        className={cn(
          "relative",
          isLast
            ? "bg-gradient-to-b from-white/10 to-transparent"
            : "bg-gradient-to-b from-white/20 to-white/10"
        )}
      >
        <span
          className={cn(
            "absolute -left-1 top-1.5 h-[9px] w-[9px] rounded-full ring-4 ring-[#020817]",
            role.current
              ? "bg-white shadow-[0_0_14px_2px_rgba(255,255,255,0.35)]"
              : "bg-neutral-600"
          )}
        />
      </div>

      {/* content: a card, so the keyboard reads through the gaps between roles
          rather than behind the body copy */}
      <div className={cn("pl-5 md:pl-8", isLast ? "pb-2" : "pb-8 md:pb-10")}>
       <div className="rounded-xl border border-white/10 bg-black/90 p-5 backdrop-blur-md md:p-7">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
          <h3 className="text-xl font-semibold tracking-tight text-neutral-50 md:text-2xl">
            {role.title}
          </h3>
          <span className="rounded-lg bg-white px-2 py-0.5 text-xs font-semibold text-black">
            {role.badge}
          </span>
        </div>
        <p className="mt-2 mb-4 font-mono text-sm text-neutral-400">
          {role.org} · {role.location}
        </p>

        <div className="flex flex-col gap-2.5">
          {role.bullets.map((b, i) => (
            <p
              key={i}
              className="text-sm leading-relaxed text-neutral-300 md:text-[15px]"
              style={{ textWrap: "pretty" } as React.CSSProperties}
            >
              {b}
            </p>
          ))}
        </div>

        {role.metrics && role.metrics.length > 0 && (
          <div
            className={cn(
              "mt-5 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10",
              role.metrics.length >= 4
                ? "grid-cols-2 md:grid-cols-4"
                : "grid-cols-2"
            )}
          >
            {role.metrics.map((m) => (
              <div key={m.label} className="bg-white/[0.04] px-3.5 py-4">
                <p className="text-xl font-semibold tracking-tight text-neutral-50 md:text-2xl">
                  {m.value}
                </p>
                <p className="mt-1 text-[11px] leading-snug text-neutral-500">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        )}
       </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
