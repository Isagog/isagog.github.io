"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "../ui/card";

export const TextSection = ({
  firstParagraph,
  secondParagraph,
  thirdParagraph,
}: {
  firstParagraph: string;
  secondParagraph: string;
  thirdParagraph: string;
}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }} // triggers on every scroll into view, when 30% visible
    >
      <Card
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="bg-transparent border-none p-4 text-black w-96 h-72 space-y-6 relative"
      >
        <p>{firstParagraph}</p>
        <p>{secondParagraph}</p>
        <p>{thirdParagraph}</p>
        {isHovering && <div className="absolute inset-0 bg-white opacity-5" />}
      </Card>
    </motion.div>
  );
};
