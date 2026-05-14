import type { Metadata } from "next";
import {
  Geist,
  Cormorant_Garamond,
} from "next/font/google";
import "./globals.css";
import { PageIntro, CustomCursor } from "@/components";
import { LanguageProvider } from "@/lib/language-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Aodigy — Enterprise Transformation Strategy & Delivery",
  description:
    "Strategic consulting for enterprise transformation. From strategy to delivery, we enable organizations to achieve more.",
  openGraph: {
    title: "Aodigy — Enterprise Transformation Strategy & Delivery",
    description:
      "Strategic consulting for enterprise transformation. From strategy to delivery, we enable organizations to achieve more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${cormorantGaramond.variable} antialiased`}
    >
      <body>
        <LanguageProvider>
          <PageIntro />
          <CustomCursor />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
