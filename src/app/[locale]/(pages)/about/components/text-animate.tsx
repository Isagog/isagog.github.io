"use client";

import { motion } from "framer-motion";

export const TextAnimate = ({
  value,
  subValue,
}: {
  value: string;
  subValue?: string;
}) => {
  return (
    <div className="h-96 flex flex-col gap-8 justify-center items-center">
      <motion.span
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center text-2xl font-serif text-[#a8fa87]"
      >
        {value}
      </motion.span>
      {subValue && (
        <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center text-2xl font-serif text-[#a8fa87]"
        >
          {subValue}
        </motion.span>
      )}
    </div>
  );
};
