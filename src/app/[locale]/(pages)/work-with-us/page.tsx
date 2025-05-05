"use client";

import Link from "next/link";
import { useScopedI18n } from "@/packages/locales/client";

export const WorkWithUsPage = () => {
  const t = useScopedI18n("work-with-us-page");
  return (
    <div className="flex items-center justify-center h-[65vh]">
      <h1 className="text-center">
        {t("label")}
        <Link href="mailto:hiring@isagog.com" className="text-[#86efac]">
          hiring@isagog.com
        </Link>
      </h1>
    </div>
  );
};

export default WorkWithUsPage;
