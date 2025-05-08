"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const BlogCard = ({
  title,
  imageUrl,
  slug,
}: {
  title: string;
  imageUrl: string;
  slug: string;
}) => {
  return (
    <div className="flex bg-green-700 w-3xl">
      <div>
        <Image
          src={imageUrl}
          alt={title}
          width={200}
          height={200}
          className="w-44 h-44 object-cover"
        />
      </div>
      <div className="flex justify-center items-center mx-auto">
        <motion.h1
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            href={`/blog/${slug}`}
            className="text-center text-green-400 text-2xl"
          >
            {title}
          </Link>
        </motion.h1>
      </div>
    </div>
  );
};
