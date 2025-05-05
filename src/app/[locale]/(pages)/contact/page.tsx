"use client";

import Link from "next/link";
import { useScopedI18n } from "@/packages/locales/client";

const ContactPage = () => {
  const t = useScopedI18n("contact-page");
  return (
    <div className="flex items-center justify-center h-[65vh]">
      <h1 className="text-center">
        {t("label")}
        <Link href="mailto:info@isagog.com" className="text-[#86efac]">
          info@isagog.com
        </Link>
      </h1>
    </div>
  );
};
export default ContactPage;
