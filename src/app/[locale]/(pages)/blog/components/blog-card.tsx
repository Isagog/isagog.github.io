"use client";

import Image from "next/image";
import Link from "next/link";

export const BlogCard = ({
  title,
  imageUrl,
}: {
  title: string;
  imageUrl: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row bg-green-700 max-w-3xl w-full rounded-lg overflow-hidden shadow-md">
      <Image
        src={imageUrl}
        alt="placeholder"
        width={200}
        height={200}
        className="w-full md:w-44 h-44 object-cover"
      />
      <div className="flex justify-center items-center p-4 w-full">
        <h1 className="text-center text-[#a8fa87] font-semibold text-2xl">
          <Link href="#">{title}</Link>
        </h1>
      </div>
    </div>
  );
};
