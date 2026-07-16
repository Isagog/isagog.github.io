"use client";

import { SectionTitle } from "@/app/_components/custom/section-title";
import { useScopedI18n } from "@/packages/locales/client";
import Image from "next/image";
import Link from "next/link";

const ContactPage = () => {
  const t = useScopedI18n("contact-page");
  return (
    <div className="flex flex-col items-center justify-center gap-10 h-[80vh] mx-5 sm:mx-auto sm:max-w-2xl text-center">
      <Image
        src="/images/botanical_trees.png"
        alt="Botanical illustrations of European tree species"
        width={1376}
        height={768}
        className="w-full max-w-md h-auto object-contain"
      />
      <SectionTitle as="h1" className="text-lg font-[400]">
        {t("label")}
        <Link href="mailto:info@isagog.com" className="text-terracotta">
          info@isagog.com
        </Link>
      </SectionTitle>
    </div>
  );
};
export default ContactPage;
