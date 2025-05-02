"use client";
import Image from "next/image";
import { useScopedI18n } from "@/packages/locales/client";
import { motion } from "framer-motion";

export const Hero = () => {
  const t = useScopedI18n("hero");
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/image/tree.avif"
        alt="Tree"
        width={1000}
        height={1000}
        className="w-48 h-48"
      />
      <h1 className="text-4xl font-bold text-center">{t("title")}</h1>
      <motion.p
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {t("description")}
      </motion.p>
    </div>
  );
};
