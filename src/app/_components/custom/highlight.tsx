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

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const Highlight = () => {
  const tHighlight = useScopedI18n("highlight");

  return (
    <motion.div
      className="w-2/3 flex flex-col justify-center items-center mt-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.h1 className="text-2xl font-serif mb-4" variants={fadeUp}>
        {tHighlight("title")}
      </motion.h1>

      <motion.div variants={fadeUp}>
        <motion.p variants={fadeUp}>
          <span className="font-bold">{tHighlight("1.title")}</span>
          {tHighlight("1.description")}
        </motion.p>
        <motion.p variants={fadeUp}>
          <span className="font-bold">{tHighlight("2.title")}</span>
          {tHighlight("2.description")}
        </motion.p>
      </motion.div>

      <motion.p className="my-8" variants={fadeUp}>
        <span className="font-bold">{tHighlight("3.name")}</span>{" "}
        {tHighlight("3.text")}
      </motion.p>

      <motion.div variants={fadeUp}>
        {["4", "5", "6", "7", "8"].map((i) => (
          <motion.p key={i} variants={fadeUp}>
            – <span className="font-bold">{tHighlight(i + ".title")}</span>
            {tHighlight(i + ".description")}
          </motion.p>
        ))}
      </motion.div>
    </motion.div>
  );
};
