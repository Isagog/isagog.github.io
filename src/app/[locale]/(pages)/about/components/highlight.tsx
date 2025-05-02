"use client";

import Link from "next/link";
import { useScopedI18n } from "@/packages/locales/client";

export const Highlight = () => {
  const t = useScopedI18n("about-highlight");
  return (
    <div className="mb-12">
      <h1 className="text-end text-2xl font-serif mb-4">{t("title")}</h1>
      <div className="space-y-4">
        <p>{t("1")}</p>
        <p>{t("2")}</p>
        <p>{t("3")}</p>
        <p>{t("4")}</p>
      </div>
      <Link href="/about">{t("link")}</Link>
    </div>
  );
};
