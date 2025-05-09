import { Footer, Header } from "@/app/_components/custom";
import { Providers } from "@/app/_components/providers";
import { I18nProviderClient } from "@/packages/locales/client";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { BodyWrapper } from "@/app/_components/custom/body-wrapper";
import "../globals.css";

export const metadata: Metadata = {
  title: "ISAGOG",
  description: "",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale ?? "it"}>
      <I18nProviderClient locale={locale}>
        <Providers>
          <BodyWrapper>
            <Header />
            {children}
            <Footer />
          </BodyWrapper>
        </Providers>
      </I18nProviderClient>
    </html>
  );
}
