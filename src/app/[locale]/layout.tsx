import { Footer, Header } from "@/app/_components/custom";
import { Providers } from "@/app/_components/providers";
import { I18nProviderClient } from "@/packages/locales/client";
import type { Metadata } from "next";
import { Spectral } from "next/font/google";
import { ReactNode } from "react";

import { cn } from "../../lib/utils";
import "../globals.css";

export const metadata: Metadata = {
  title: "JStack App",
  description: "Created using JStack",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Spectral({
  weight: "200",
  subsets: ["latin"],
});

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
      <body className={cn("antialiased bg-background pt-22", inter.className)}>
        <I18nProviderClient locale={locale}>
          <Providers>
            <Header />
            <div className="container w-full mx-auto">{children}</div>
            <Footer />
          </Providers>
        </I18nProviderClient>
      </body>
    </html>
  );
}
