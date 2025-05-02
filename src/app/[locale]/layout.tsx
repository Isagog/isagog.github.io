import type { Metadata } from "next";
import { ReactNode } from "react";
import { I18nProviderClient } from "@/packages/locales/client";
import { Providers } from "@/app/_components/providers";
import { Header, Footer } from "@/app/_components/custom";

import "../globals.css";

export const metadata: Metadata = {
  title: "JStack App",
  description: "Created using JStack",
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
      <body className="antialiased bg-background pt-22">
        <I18nProviderClient locale={locale}>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </I18nProviderClient>
      </body>
    </html>
  );
}
