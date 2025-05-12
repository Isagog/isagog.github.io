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
    <div className="bg-transparent border-none sm:p-2  w-fit min-w-64 sm:w-96 sm:h-72 space-4 sm:space-y-8 font-serif text-start relative">
      <p>{firstParagraph}</p>
      <p>{secondParagraph}</p>
      <p>{thirdParagraph}</p>
    </div>
  );
};
