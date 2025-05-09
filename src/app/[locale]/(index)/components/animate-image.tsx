"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const AnimateImage = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="h-72 flex justify-center items-center"
    >
      <Image
        src="/image/tree.avif"
        alt="Your Image"
        className="w-72 h-72"
        width={1000}
        height={1000}
      />
    </motion.div>
  );
};
