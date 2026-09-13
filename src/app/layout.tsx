import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Uzunsoy Çekici | 7/24 Yol Yardım",
  description:
    "Yolda mı kaldınız? Uzunsoy Çekici ile en hızlı ve güvenilir çekici hizmeti. 7/24 acil yol yardım.",
  keywords: [
    "çekici",
    "yol yardım",
    "uzunsoy çekici",
    "acil çekici",
    "bursa çekici",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
