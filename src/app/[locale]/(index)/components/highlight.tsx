"use client";

import { useScopedI18n } from "@/packages/locales/client";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const Highlight = () => {
  const tHighlight = useScopedI18n("home-page.highlight");

  return (
    <motion.div
      className="max-w-2/3 flex flex-col justify-center items-center mt-12 min-h-screen sm:gap-8 text-justify"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <h1 className="md:text-2xl text-xl font-[600] font-serif mb-4">
        {tHighlight("title")}
      </h1>

      <p className="font-[500] text-lg">{tHighlight("description")}</p>

      <p className="font-[500] text-lg">
        <span className="font-bold">{tHighlight("1.title")}</span>
        &nbsp;
        {tHighlight("1.description")}
      </p>
      <p className="font-[500] text-lg">
        <span className="font-bold">{tHighlight("2.title")}</span>
        &nbsp;
        {tHighlight("2.description")}
      </p>
      <div>
        <p className="font-[500] text-lg">
          <span className="font-bold">{tHighlight("3.name")}</span>
          &nbsp;
          {tHighlight("3.text")}
        </p>
        <div className="ml-4 mt-4 flex flex-col gap-4">
          {["4", "5", "6", "7", "8"].map((i) => (
            <p className="text-justify font-[500] text-lg" key={i}>
              –
              <span className="font-bold">
                {tHighlight(`${i}.title` as keyof typeof tHighlight)}
              </span>
              &nbsp;
              {tHighlight(`${i}.description` as keyof typeof tHighlight)}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
