"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.8, ease: "easeOut" },
  },
};

export const NavWithDescriptionSection = ({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <Link
        href={href}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="flex flex-col gap-4 w-fit ml-12"
      >
        <h1
          className={`xl:text-4xl text-lg  ${
            isHovering ? "text-green-200 opacity-50" : "text-[#A8FA87]"
          }`}
        >
          {title}
        </h1>
        <p
          className={`xl:text-base text-sm font-light ${
            isHovering ? "text-green-200 opacity-50" : ""
          }`}
        >
          {description}
        </p>
        <ArrowRight
          className={`${
            isHovering ? "text-green-200 opacity-50" : "text-[#A8FA87]"
          }`}
          size={24}
        />
      </Link>
    </motion.div>
  );
};
