"use client";

import Link from "next/link";
import { useScopedI18n } from "@/packages/locales/client";

export const Highlight = () => {
  const t = useScopedI18n("about-page.highlight");
  return (
    <div className="mb-12">
      <h1 className="text-end text-2xl font-serif mb-8">{t("title")}</h1>
      <div className="space-y-8 font-sans text-justify">
        <p>{t("1")}</p>
        <p>{t("2")}</p>
        <p>{t("3")}</p>
        <p>{t("4")}</p>
      </div>
      <Link href="/about" className="text-[#a8fa87] font-sans">
        {t("link")}
      </Link>
    </div>
  );
};
