"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { LocaleLink as Link } from "@/app/_components/custom/locale-link";

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
  imageUrl,
}: {
  title: string;
  description: string;
  href: string;
  imageUrl: string;
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
        className={`flex items-center gap-6 w-full sm:ml-12 sm:mr-0 mx-2 ${
          isHovering && "opacity-60 transition-opacity"
        }`}
      >
        <Image
          src={imageUrl}
          alt=""
          width={96}
          height={96}
          className="w-20 h-20 sm:w-24 sm:h-24 object-contain object-bottom shrink-0"
        />
        <div className="flex flex-col gap-2">
          <h1 className={`mt-10 text-2xl font-sans font-[400] text-terracotta`}>
            {title}
          </h1>
          <p className={`text-2xl font-serif font-[300]`}>{description}</p>
          <ArrowRight className={`text-terracotta`} size={24} />
        </div>
      </Link>
    </motion.div>
  );
};
