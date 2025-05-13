"use client";

import { useScopedI18n } from "@/packages/locales/client";
import Link from "next/link";

export const Highlight = () => {
  const t = useScopedI18n("about-page.highlight");
  return (
    <div className="mb-12">
      <h1 className="sm:text-end text-start text-3xl font-[600] font-serif mb-8">
        {t("title")}
      </h1>
      <div className="space-y-8 font-sans font-[300]  text-justify">
        <p className="text-lg">{t("1")}</p>
        <p className="text-lg">{t("2")}</p>
        <p className="text-lg">{t("3")}</p>
        <p className="text-lg">{t("4")}</p>
      </div>
      <Link href="/blog" className="text-[#a8fa87] font-sans">
        {t("link")}
      </Link>
    </div>
  );
};
