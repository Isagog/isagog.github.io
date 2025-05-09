"use client";

export const TextSection = ({
  firstParagraph,
  secondParagraph,
  thirdParagraph,
}: {
  firstParagraph: string;
  secondParagraph: string;
  thirdParagraph: string;
}) => {
  return (
    <div className="bg-transparent border-none p-8  w-64 sm:w-96 h-72 space-y-8 relative">
      <p>{firstParagraph}</p>
      <p>{secondParagraph}</p>
      <p>{thirdParagraph}</p>
    </div>
  );
};
