"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const ImageWithTitle = ({
  title,
  imageUrl,
  className,
}: {
  title: string;
  imageUrl: string;
  className?: string;
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
      <Image
        src={imageUrl}
        alt="Mermaid"
        width={2000}
        height={1000}
        className={` ${className}`}
      />
    </div>
  );
};
