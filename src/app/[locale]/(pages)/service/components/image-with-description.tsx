import Image from "next/image";

export const ImageWithDescription = ({
  title,
  firstParagraph,
  secondParagraph,
  thirdParagraph,
  imageUrl,
  imagePosition = "left",
  imgClassName,
  className,
}: {
  title: string;
  firstParagraph: string;
  secondParagraph: string;
  thirdParagraph?: string;
  imageUrl: string;
  imagePosition?: "left" | "right";
  imgClassName?: string;
  className?: string;
}) => {
  return (
    <div
      className={`xl:w-[80%] w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center mb-16 gap-8 ${className} ${
        imagePosition === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      <Image
        src={imageUrl}
        alt="placeholder"
        width={500}
        height={500}
        className={imgClassName}
      />
      <div className="space-y-8 md:w-96 text-center md:text-left">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="font-sans">{firstParagraph}</p>
        <p className="font-sans">{secondParagraph}</p>
        {thirdParagraph && <p className="font-sans">{thirdParagraph}</p>}
      </div>
    </div>
  );
};
