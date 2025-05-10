import { Footer, Header } from "@/app/_components/custom";
import { BodyWrapper } from "@/app/_components/custom/body-wrapper";
import { Providers } from "@/app/_components/providers";
import { I18nProviderClient } from "@/packages/locales/client";
import type { Metadata } from "next";
import { Montserrat, Spectral } from "next/font/google";
import type { ReactNode } from "react";
import "../globals.css";

export const metadata: Metadata = {
  title: "ISAGOG",
  description: "",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600"],
});

const spectral = Spectral({
  subsets: ["latin"],
  variable: "--font-spectral",
  weight: ["400"],
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
    <html
      lang={locale ?? "it"}
      className={`${montserrat.variable} ${spectral.variable}`}
    >
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
