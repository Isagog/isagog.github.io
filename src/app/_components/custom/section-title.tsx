import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type SectionTitleProps = {
  as?: "h1" | "h2" | "h3";
  tone?: "light" | "dark";
  accent?: boolean;
  className?: string;
} & Omit<ComponentProps<"h1">, "className">;

const sizeByTag: Record<NonNullable<SectionTitleProps["as"]>, string> = {
  h1: "text-3xl sm:text-4xl",
  h2: "text-2xl",
  h3: "text-xl",
};

export function SectionTitle({
  as = "h2",
  tone = "light",
  accent = false,
  className,
  children,
  ...props
}: SectionTitleProps) {
  const toneClass = accent ? "text-terracotta" : tone === "dark" ? "text-paper" : "text-forest";
  const titleClassName = cn("font-serif", sizeByTag[as], toneClass, className);

  if (as === "h1") {
    return (
      <h1 className={titleClassName} {...props}>
        {children}
      </h1>
    );
  }
  if (as === "h3") {
    return (
      <h3 className={titleClassName} {...props}>
        {children}
      </h3>
    );
  }
  return (
    <h2 className={titleClassName} {...props}>
      {children}
    </h2>
  );
}
