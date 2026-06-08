"use client";

import { stripLocale } from "@/lib/locale-href";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

export const BodyWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const pathname = usePathname();
  const [isProjectPage, setIsProjectPage] = useState(false);

  useEffect(() => {
    setIsProjectPage(stripLocale(pathname).startsWith("/project"));
  }, [pathname]);

  return (
    <body
      className={cn(
        className,
        "antialiased pt-22",
        isProjectPage ? "bg-white" : "bg-background"
      )}
    >
      {children}
    </body>
  );
};
