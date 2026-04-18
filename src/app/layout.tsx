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

const siteUrl = "https://alphacapitald.com";
const ogImage = "https://res.cloudinary.com/dfwty72r9/image/upload/v1776505233/img24_z1i1ym.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Alpha Capital D | EPIC Services Provider — Nigeria",
    template: "%s | Alpha Capital D",
  },
  description:
    "Alpha Capital D Integrated Services Ing Ltd — Nigeria's leading EPIC services company. 15+ years delivering Oil & Gas, Power Generation and Civil Construction projects for SPDC, Saipem & NAOC. Based in Port Harcourt.",
  keywords:
    "EPIC services Nigeria, oil gas engineering Port Harcourt, pipeline construction Nigeria, valve services Nigeria, NDT inspection, flare systems Niger Delta, tank construction, electrical engineering Nigeria, SPDC contractor, Saipem contractor",
  authors: [{ name: "Alpha Capital D Integrated Services Ing Ltd" }],
  creator: "Alpha Capital D Integrated Services Ing Ltd",
  publisher: "Alpha Capital D Integrated Services Ing Ltd",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: "Alpha Capital D Integrated Services",
    title: "Alpha Capital D | EPIC Services Provider — Nigeria",
    description:
      "Nigeria's leading EPIC services company for Oil & Gas, Power Generation and Construction. 15+ years. Port Harcourt, Rivers State.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Alpha Capital D — EPIC Services Provider Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpha Capital D | EPIC Services Provider — Nigeria",
    description:
      "Nigeria's leading EPIC services company for Oil & Gas, Power Generation and Construction. Port Harcourt.",
    images: [ogImage],
  },
  alternates: {
    canonical: siteUrl,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Alpha Capital D Integrated Services Ing Ltd",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/dfwty72r9/image/upload/v1775578889/alphacapitald-logo-main_ao61hj.png",
        width: 200,
        height: 200,
      },
      description:
        "Nigeria's leading EPIC services provider for Oil & Gas, Power Generation and Civil Construction. 15+ years serving SPDC, Saipem, NAOC and more.",
      telephone: ["+2348034107529", "+2347062518233", "+2348052188337"],
      email: "info@alphacapitald.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "No. 1 Exozia Close off Airport Road, Behind AA Rono Filling Station",
        addressLocality: "Port Harcourt",
        addressRegion: "Rivers State",
        addressCountry: "NG",
      },
      areaServed: ["Nigeria", "Niger Delta", "Rivers State", "Imo State", "Ondo State"],
      knowsAbout: [
        "Pipeline Construction",
        "Valve Services",
        "NDT Inspection",
        "Flare Systems",
        "Tank Construction",
        "Electrical Engineering",
        "Equipment Leasing",
        "Chemical Supply",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Alpha Capital D",
      description: "Alpha Capital D Integrated Services Ing Ltd — EPIC Services Nigeria",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
