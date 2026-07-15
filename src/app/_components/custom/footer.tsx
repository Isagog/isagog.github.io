"use client";

import { stripLocale } from "@/lib/locale-href";
import {
  useChangeLocale,
  useCurrentLocale,
  useScopedI18n,
} from "@/packages/locales/client";
import { usePathname } from "next/navigation";
import { LocaleLink as Link } from "./locale-link";

const languages: {
  code: "en" | "it";
  name: string;
}[] = [
  { code: "it", name: "Italiano" },
  { code: "en", name: "English" },
];

export const Footer = () => {
  const tFooter = useScopedI18n("footer");
  const tAddress = useScopedI18n("footer.address");
  const pathname = stripLocale(usePathname());
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  const isServicePage =
    pathname.startsWith("/service") || pathname.startsWith("/platform");

  const navItems = [
    { title: tFooter("platform"), href: "/platform" },
    { title: tFooter("solutions"), href: "/service" },
    { title: tFooter("projects"), href: "/project" },
    { title: tFooter("insights"), href: "/blog" },
  ];

  const navItems2 = [
    { title: tFooter("contact"), href: "/contact" },
    { title: tFooter("work_with_us"), href: "/work-with-us" },
  ];

  return (
    <footer className="container font-sans  font-spectral text-xs font-[300] w-full px-4 sm:w-[70%] mx-auto py-4 mt-24">
      <div className="grid grid-cols-2 md:grid-cols-4 sm:gap-4 gap-8">
        <nav
          className={`flex flex-col gap-2 ${isServicePage ? "text-white" : ""}`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "text-black font-[400]" : ""}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div
          className={`flex flex-col gap-2 ${isServicePage ? "text-white" : ""}`}
        >
          <p>{tAddress("copyright", { year: new Date().getFullYear() })}</p>
          <p>{tAddress("street")}</p>
          <p>{tAddress("zip")}</p>
        </div>
        <nav
          className={`flex flex-col gap-2 xl:items-end ${
            isServicePage ? "text-white" : ""
          }`}
        >
          {navItems2.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "text-black font-[400]" : ""}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="flex xl:items-end items-start flex-col justify-start gap-2">
          <p className={`${isServicePage ? "text-white" : ""}`}>
            {tFooter("languages")}
          </p>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLocale(lang.code)}
              className={`flex items-center gap-1 px-2 py-1 rounded hover:bg-muted/40 transition cursor-pointer ${
                currentLocale === lang.code
                  ? "font-[400] text-black"
                  : `${isServicePage ? "text-white" : ""}`
              }`}
            >
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};
