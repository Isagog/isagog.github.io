"use client";
import { useScopedI18n } from "@/packages/locales/client";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  const t = useScopedI18n("home-page.hero");

  return (
    <div className="flex flex-col items-center gap-2 justify-center min-h-screen">
      <Image
        src="/image/tree.avif"
        alt="Tree"
        width={1000}
        height={1000}
        className="w-48 h-48 mb-8"
      />
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-7xl text-center text-primary"
      >
        {t("title")}
      </motion.h1>
      <motion.p
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center"
      >
        {t("description")}
      </motion.p>
    </div>
  );
};
