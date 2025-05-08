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
    <div className="flex flex-col sm:flex-row bg-green-700 rounded-lg overflow-hidden w-full max-w-3xl mx-auto shadow-md">
      <div className="flex-shrink-0">
        <Image
          src={imageUrl}
          alt={title}
          width={200}
          height={200}
          className="w-full sm:w-44 h-44 object-cover"
        />
      </div>
      <div className="flex justify-center items-center p-4 text-center sm:text-left w-full">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            href={`/blog/${slug}`}
            className="text-green-200 text-xl sm:text-2xl font-semibold hover:underline"
          >
            {title}
          </Link>
        </motion.h1>
      </div>
    </div>
  );
};
