"use client";

import Link from "next/link";
import { useScopedI18n } from "@/packages/locales/client";

export const Footer = () => {
  const tFooter = useScopedI18n("footer");
  const navItems = [
    {
      title: tFooter("solutions"),
      href: "/service",
    },
    {
      title: tFooter("projects"),
      href: "/project",
    },
    {
      title: tFooter("insights"),
      href: "/blog",
    },
  ];

  const navItems2 = [
    {
      title: tFooter("contact"),
      href: "/contact",
    },
    {
      title: tFooter("work_with_us"),
      href: "/work-with-us",
    },
  ];
  return (
    <footer className="w-2/3 mx-auto flex justify-between px-12 py-8 text-xs">
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.title}
          </Link>
        ))}
      </nav>
      <div>
        <p>(c) 2024 Isagog Srl </p>
        <p>Via Faà di Bruno 52</p>
        <p>00195 Roma (IT)</p>
      </div>
      <nav className="flex flex-col gap-2">
        {navItems2.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.title}
          </Link>
        ))}
      </nav>
    </footer>
  );
};
