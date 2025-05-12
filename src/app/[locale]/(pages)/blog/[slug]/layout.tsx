"use client";

import { useEffect } from "react";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    document.body.classList.add("bg-white");
    return () => {
      document.body.classList.remove("bg-white");
    };
  }, []);
  return <div className="mx-2 sm:mx-[10%] bg-white">{children}</div>;
};

export default BlogLayout;
