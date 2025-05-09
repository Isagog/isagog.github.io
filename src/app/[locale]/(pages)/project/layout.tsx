"use client";

import { useEffect } from "react";

const ProjectLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    document.body.classList.add("bg-white");
    return () => {
      document.body.classList.remove("bg-white");
    };
  }, []);

  return <div>{children}</div>;
};

export default ProjectLayout;
