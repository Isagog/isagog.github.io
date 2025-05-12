"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useScopedI18n } from "@/packages/locales/client";
import clsx from "clsx";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const whitePages = ["/project", "/blog/"];

export const Header = () => {
  const t = useScopedI18n("header");
  const pathname = usePathname();
  const isWhitePage = whitePages.some(
    (page) => pathname.startsWith(page) && pathname !== "/blog"
  );

  const navItems = [
    { href: "/about", label: t("about") },
    { href: "/service", label: t("solution") },
    { href: "/project", label: t("project") },
    { href: "/blog", label: t("blog") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header
      className={cn(
        "flex fixed top-0 z-50 w-full items-center border-b border-border",
        isWhitePage ? "bg-white" : "bg-background"
      )}
    >
      <div className="flex w-full items-center justify-between gap-2 px-1 sm:px-8 py-6">
        <Link href="/" prefetch>
          <Image
            src="/logo-new.png"
            alt="logo isagog"
            width={220}
            height={200}
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                prefetch
                className={clsx(
                  "font-sans font-[300] text-primary  hover:text-black text-base",
                  isActive ? "text-[#86efac]" : ""
                )}
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
