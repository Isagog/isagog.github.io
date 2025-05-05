"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import { useScopedI18n } from "@/packages/locales/client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Image from "next/image";

const languages: {
  code: "en" | "it";
  name: string;
  flag: string;
}[] = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
];

export const Header = () => {
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
            <Image
              src="/logo.svg"
              alt="logo"
              width={300}
              height={200}
              className="w-48 h-48"
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-4">
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
        </nav>
        <div className="flex md:hidden items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer h-8 w-8 flex items-center justify-center rounded-full bg-muted/40 hover:bg-muted/60 transition-colors">
              <Menu className="h-5 w-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              {navItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link
                    href={item.href}
                    prefetch
                    className={
                      pathname === item.href
                        ? "text-[#86efac] w-full"
                        : "w-full"
                    }
                  >
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
