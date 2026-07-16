"use client";

import { useState } from "react";
import { LocaleLink as Link } from "@/app/_components/custom/locale-link";

export const TextSection = ({
  firstParagraph,
  secondParagraph,
  thirdParagraph,
  linkToExample,
}: {
  firstParagraph: string;
  secondParagraph: string;
  thirdParagraph: string;
  linkToExample?: string;
}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`bg-transparent border-none sm:p-2  w-fit min-w-64 sm:w-96 sm:h-72 space-4 sm:space-y-8 font-serif text-start relative ${
        isHovering && "opacity-60 transition-opacity"
      }`}
    >
      <p>{firstParagraph}</p>
      <p>{secondParagraph}</p>
      <p>
        {thirdParagraph}{" "}
        {linkToExample && (
          <Link href="/service" className="text-terracotta">
            {linkToExample}
          </Link>
        )}
      </p>
    </div>
  );
};
