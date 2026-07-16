"use client";

import { LocaleLink as Link } from "@/app/_components/custom/locale-link";
import { SectionTitle } from "@/app/_components/custom/section-title";
import { useScopedI18n } from "@/packages/locales/client";

export const Highlight = () => {
  const t = useScopedI18n("about-page.highlight");
  return (
    <div className="mb-12">
      <SectionTitle
        as="h1"
        accent
        className="sm:text-end text-start text-2xl font-[600] mb-8"
      >
        {t("title")}
      </SectionTitle>
      <div className="space-y-8 font-sans font-[400]  text-justify">
        <p className="text-lg">{t("1")}</p>
        <p className="text-lg">{t("2")}</p>
        <p className="text-lg">{t("3")}</p>
        <p className="text-lg">{t("4")}</p>
      </div>
      <Link href="/blog" className="text-terracotta font-sans">
        {t("link")}
      </Link>
    </div>
  );
};
