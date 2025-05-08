"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const ImageWithTitle = ({
  title,
  imageUrl,
  imageDescription,
}: {
  title: string;
  imageUrl: string;
  imageDescription?: {
    firstParagraph: string;
    secondParagraph: string;
    thirdParagraph?: string;
    fourthParagraph?: string;
  };
}) => {
  return (
    <div className="w-[80%] flex flex-col items-center justify-between gap-8 mt-28">
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-2xl font-bold h-14 text-center"
      >
        {title}
      </motion.h1>
      <div className="flex items-center justify-between gap-20">
        {imageDescription && (
          <div className="flex flex-col text-nowrap space-y-52 text-end text-[#5aff35] font-sans font-semibold">
            <p>{imageDescription.firstParagraph}</p>
            <p>{imageDescription.secondParagraph}</p>
            {imageDescription.thirdParagraph && (
              <p>{imageDescription.thirdParagraph}</p>
            )}
            {imageDescription.fourthParagraph && (
              <p>{imageDescription.fourthParagraph}</p>
            )}
          </div>
        )}
        <Image src={imageUrl} alt={title} width={1000} height={1000} />
      </div>
    </div>
  );
};
