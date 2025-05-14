"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useScopedI18n } from "@/packages/locales/client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const whitePages = ["/project", "/blog/"];

export const Header = () => {
  const t = useScopedI18n("header");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isWhitePage = whitePages.some(
    (page) => pathname.startsWith(page) && pathname !== "/blog"
  );
  const isServicePage = pathname.startsWith("/service");

  const navItems = [
    { href: "/about", label: t("about") },
    { href: "/service", label: t("solution") },
    { href: "/project", label: t("project") },
    { href: "/blog", label: t("blog") },
    { href: "/contact", label: t("contact"), isContact: true },
  ];

  return (
    <header
      className={cn(
        "flex fixed top-0 z-50 w-full items-center border-b border-border",
        isWhitePage ? "bg-white" : "bg-background",
        isServicePage ? "bg-[#223319] border-[#1f2e17de]" : ""
      )}
    >
      <div className="flex w-full items-center justify-between gap-2 px-1 sm:px-8 py-6">
        <Link href="/" prefetch>
          <Image
            src={isServicePage ? "/logo-green-dark.png" : "/logo-new.png"}
            alt="logo isagog"
            width={220}
            height={200}
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                prefetch
                className={cn(
                  "font-sans font-[400] text-primary hover:text-black text-base",
                  isServicePage ? "text-white" : "",
                  isActive && "text-[#000000] font-[400]",
                  item.isContact && "text-[#a8fa87] font-[400]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex lg:hidden items-center gap-2">
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger className="cursor-pointer h-8 w-8 flex items-center justify-center rounded-full transition-colors">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className={`w-40 bg-background border-none shadow-none ${
                isWhitePage ? "bg-white" : "bg-background"
              }`}
            >
              {navItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link
                    href={item.href}
                    prefetch
                    className={cn(
                      "font-sans font-[300] text-primary text-base",
                      pathname === item.href && "text-[#000000] font-[400]"
                    )}
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
