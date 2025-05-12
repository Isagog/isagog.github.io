"use client";

import { useScopedI18n } from "@/packages/locales/client";

export const ServicesSection = () => {
  const t = useScopedI18n("about-page.faqs-list");

  const faqsList = [
    {
      q: t("1.title"),
      a: t("1.a"),
      b: t("1.b"),
    },
    {
      q: t("2.title"),
      a: t("2.a"),
      b: t("2.b"),
    },
    {
      q: t("3.title"),
      a: t("3.a"),
      b: t("3.b"),
    },
    {
      q: t("4.title"),
      a: t("4.a"),
      b: "",
    },
    {
      q: t("5.title"),
      a: t("5.a"),
      b: "",
    },
    {
      q: t("6.title"),
      a: t("6.a"),
      b: "",
    },
  ];

  return (
    <div className="mt-12">
      <ul className="space-y-8 sm:gap-12 gap-16 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3">
        {faqsList.map((item, idx) => (
          <li key={idx} className="sm:space-y-3">
            <summary className="flex items-center justify-between font-normal text-2xl text-[#a8fa87]">
              {item.q}
            </summary>
            <p
              dangerouslySetInnerHTML={{ __html: item.a }}
              className=" leading-relaxed font-sans font-normal"
            ></p>
            <p
              dangerouslySetInnerHTML={{ __html: item.b }}
              className=" leading-relaxed font-sans font-normal"
            ></p>
          </li>
        ))}
      </ul>
    </div>
  );
};
