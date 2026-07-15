"use client";

import { useEffect } from "react";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    document.body.style.backgroundColor = "#223319";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  return <div className="mx-2 sm:mx-[10%] text-white">{children}</div>;
};

export default PlatformLayout;
