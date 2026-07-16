import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export const BodyWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <body className={cn(className, "antialiased pt-22 bg-background")}>
      {children}
    </body>
  );
};
