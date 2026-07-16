"use client";

import { useScopedI18n } from "@/packages/locales/client";
import Link from "next/link";

const WorkWithUsPage = () => {
  const t = useScopedI18n("work-with-us-page");
  return (
    <div className="flex items-center justify-center h-[80vh]">
      <h1 className="text-center font-sans font-spectral text-lg">
        {t("label")}
        {" "}
        <Link href="mailto:hiring@isagog.com" className="text-terracotta">
          hiring@isagog.com
        </Link>
      </h1>
    </div>
  );
};

export default WorkWithUsPage;
