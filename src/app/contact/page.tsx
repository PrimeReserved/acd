import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Alpha Capital D Integrated Services for EPIC project enquiries. Port Harcourt office — call +234 803 410 7529 or email info@alphacapitald.com. We respond within 24 hours.",
  keywords:
    "contact Alpha Capital D, EPIC services enquiry Nigeria, oil gas contractor Port Harcourt, pipeline construction quote Nigeria",
  alternates: {
    canonical: "https://alphacapitald.com/contact",
  },
  openGraph: {
    title: "Contact Us | Alpha Capital D",
    description:
      "Get in touch with Alpha Capital D for EPIC services in Nigeria. Port Harcourt — +234 803 410 7529 · info@alphacapitald.com.",
    url: "https://alphacapitald.com/contact",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Alpha Capital D Integrated Services Ing Ltd",
  image: "https://res.cloudinary.com/dfwty72r9/image/upload/v1776525836/alphacapitald-logo-main-wt_j2pg5r.png",
  url: "https://alphacapitald.com",
  telephone: "+2348034107529",
  email: "info@alphacapitald.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 1 Exozia Close off Airport Road, Behind AA Rono Filling Station",
    addressLocality: "Port Harcourt",
    addressRegion: "Rivers State",
    addressCountry: "NG",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "13:00",
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <ContactClient />
    </>
  );
}
