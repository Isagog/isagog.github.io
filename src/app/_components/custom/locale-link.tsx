"use client";

import { localeHref } from "@/lib/locale-href";
import { useCurrentLocale } from "@/packages/locales/client";
import Link from "next/link";
import type { ComponentProps } from "react";

/**
 * Drop-in replacement for next/link that prefixes internal hrefs with the
 * current locale (e.g. "/about" -> "/it/about"). Required because the static
 * export uses real /it and /en URL segments instead of middleware rewrites.
 */
export const LocaleLink = ({
  href,
  ...props
}: ComponentProps<typeof Link>) => {
  const locale = useCurrentLocale();
  const resolved = typeof href === "string" ? localeHref(locale, href) : href;
  return <Link href={resolved} {...props} />;
};
