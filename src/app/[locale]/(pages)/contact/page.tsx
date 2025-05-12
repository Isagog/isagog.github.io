"use client";

import { useScopedI18n } from "@/packages/locales/client";
import Link from "next/link";

const ContactPage = () => {
  const t = useScopedI18n("contact-page");
  return (
    <div className="flex items-center justify-center h-[80vh]">
      <h1 className="text-center font-sans font-spectral text-lg">
        {t("label")}
        <Link href="mailto:info@isagog.com" className="text-[#86efac]">
          info@isagog.com
        </Link>
      </h1>
    </div>
  );
};
export default ContactPage;
