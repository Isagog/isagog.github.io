"use client";
import { useScopedI18n } from "@/packages/locales/client";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  const t = useScopedI18n("home-page.hero");

  return (
    <div className="flex flex-col items-center gap-2 justify-center min-h-screen mx-2">
      <Image
        src="/images/tree.avif"
        alt="Tree"
        width={1000}
        height={1000}
        className="w-48 h-48 mb-8"
      />
      <h1 className="text-5xl sm:text-7xl text-center text-primary font-medium">
        {t("title")}
      </h1>
      <motion.span
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center font-normal w-full sm:w-2/3 text-lg"
      >
        {t("description")}
      </motion.span>
    </div>
  );
};
