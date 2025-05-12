"use client";

import {
  useChangeLocale,
  useCurrentLocale,
  useScopedI18n,
} from "@/packages/locales/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const languages: {
  code: "en" | "it";
  name: string;
}[] = [
  { code: "it", name: "Italiano" },
  { code: "en", name: "English" },
];

export const Footer = () => {
  const tFooter = useScopedI18n("footer");
  const pathname = usePathname();
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  const navItems = [
    { title: tFooter("solutions"), href: "/service" },
    { title: tFooter("projects"), href: "/project" },
    { title: tFooter("insights"), href: "/blog" },
  ];

  const navItems2 = [
    { title: tFooter("contact"), href: "/contact" },
    { title: tFooter("work_with_us"), href: "/work-with-us" },
  ];

  return (
    <footer className="container font-sans font-spectral text-xs w-full px-4 sm:w-[70%] mx-auto py-4 mt-24">
      <div className="grid grid-cols-2 md:grid-cols-4 sm:gap-4 gap-8">
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "text-[#86efac]" : ""}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-2">
          <p>(c) {new Date().getFullYear()} Isagog Srl</p>
          <p>Via Faà di Bruno 52</p>
          <p>00195 Roma (IT)</p>
        </div>
        <nav className="flex flex-col gap-2 xl:items-end ">
          {navItems2.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "text-[#86efac]" : ""}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="flex xl:items-end items-start flex-col justify-start gap-2">
          <p>{tFooter("languages")}</p>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLocale(lang.code)}
              className={`flex items-center gap-1 px-2 py-1 rounded hover:bg-muted/40 transition cursor-pointer ${
                currentLocale === lang.code
                  ? "font-semibold text-[#86efac]"
                  : ""
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
