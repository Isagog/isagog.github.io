"use client";

import { cn } from "@/lib/utils";
import { Spectral } from "next/font/google";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

const inter = Spectral({
  weight: "200",
  subsets: ["latin"],
});

export const BodyWrapper = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [isProjectPage, setIsProjectPage] = useState(false);

  useEffect(() => {
    setIsProjectPage(pathname.startsWith("/project"));
  }, [pathname]);

  return (
    <body
      className={cn(
        "antialiased pt-22",
        inter.className,
        isProjectPage ? "bg-white" : "bg-background"
      )}
    >
      {children}
    </body>
  );
};
