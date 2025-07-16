import React from "react";

export default function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pt-[220px]">
      <div className="flex flex-col max-w-[833px] mx-auto items-center gap-7">
        <h2 className="font-medium text-5xl leading-14 tracking-[-0.01em]">
          {title}
        </h2>
        <p className="text-base font-normal tracking-[0.018em]">{subtitle}</p>
      </div>
      <div className="mt-[120px]">{children}</div>
    </section>
  );
}
