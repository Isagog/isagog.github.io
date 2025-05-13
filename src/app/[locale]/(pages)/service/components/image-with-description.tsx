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
      className={` flex flex-col md:flex-row justify-between items-center mb-16 gap-8 ${className} ${
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
      <div className="space-y-8 md:w-96  text-center md:text-left mx-4 sm:mx-0">
        <h2 className="text-3xl md:text-nowrap font-serif font-semibold">
          {title}
        </h2>
        <p className="font-sans text-[18px] font-[300]">{firstParagraph}</p>
        <p className="font-sans text-[18px] font-[300]">{secondParagraph}</p>
        {thirdParagraph && (
          <p className="font-sans text-[18px] font-[300]">{thirdParagraph}</p>
        )}
      </div>
    </div>
  );
};
