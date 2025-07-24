import { type ReactElement } from "react";

export default function Container({
  children,
  className,
}: {
  children: ReactElement;
  className?: string;
}) {
  return (
    <div className={"max-w-[1308px] mx-auto" + " " + className}>{children}</div>
  );
}
