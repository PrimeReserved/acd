import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alpha Capital D | Integrated Services Ing Ltd",
  description:
    "Alpha Capital D Integrated Services Ing Ltd — Leading EPIC services provider in Oil & Gas, Power Generation, Industrial Plants, and Civil Construction. Port Harcourt, Nigeria.",
  keywords:
    "EPIC services Nigeria, oil gas engineering, pipeline construction, valve maintenance, NDT inspection, flare systems, Port Harcourt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable}`}
    >
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
