"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
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
  flag: string;
}[] = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
];

export const Header = () => {
  const currentLocal = useCurrentLocale();
  const changeCurrentLocale = useChangeLocale();
  const t = useScopedI18n("header");
  const pathname = usePathname();

  const navItems = [
    { href: "/about", label: t("about") },
    { href: "/service", label: t("solution") },
    { href: "/project", label: t("project") },
    { href: "/blog", label: t("blog") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header className="flex fixed top-0 z-50 w-full items-center border-b border-border bg-background">
      <div className="flex h-18 w-full items-center justify-between gap-2 px-4">
        <div className="flex items-center gap-2">
          <Link href="/" prefetch className="text-2xl font-sans">
            <h1>ISAGOG</h1>
          </Link>
        </div>
        <nav className="flex items-center gap-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                prefetch
                className={isActive ? "text-[#86efac]" : ""}
              >
                {item.label}
              </Link>
            );
          })}
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer h-8 w-8 flex items-center justify-center rounded-full bg-muted/40 hover:bg-muted/60 transition-colors">
              <span className="text-lg">
                {languages.find((lang) => lang.code === currentLocal)?.flag}
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => changeCurrentLocale(lang.code as "en" | "it")}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <span className="text-base">{lang.flag}</span>
                  <span>{lang.name}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
};
