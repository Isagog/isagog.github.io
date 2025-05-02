import Image from "next/image";

export const ImageWithDescription = ({
  title,
  firstParagraph,
  secondParagraph,
  thirdParagraph,
  imageUrl,
  imagePosition = "left",
}: {
  title: string;
  firstParagraph: string;
  secondParagraph: string;
  thirdParagraph?: string;
  imageUrl: string;
  imagePosition?: "left" | "right";
}) => {
  return (
    <div
      className={` w-[80%] mx-auto flex items-center justify-between gap-8 ${
        imagePosition === "right" ? "flex-row-reverse" : ""
      }`}
    >
      <Image
        src={imageUrl}
        alt="placeholder"
        width={500}
        height={500}
        className="w-1/2 h-80 object-contain"
      />
      <div className="space-y-4 w-1/2">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p>{firstParagraph}</p>
        <p>{secondParagraph}</p>
        {thirdParagraph && <p>{thirdParagraph}</p>}
      </div>
    </div>
  );
};
