import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: {
    absolute: "Alpha Capital D | EPIC Services — Oil & Gas Nigeria",
  },
  description:
    "Alpha Capital D Integrated Services Ing Ltd — Nigeria's leading EPIC services company for Oil & Gas, Power Generation and Civil Construction. 15+ years, 60+ km pipeline, serving SPDC, Saipem & NAOC from Port Harcourt.",
  keywords:
    "EPIC services Nigeria, oil gas company Port Harcourt, pipeline construction Nigeria, valve services, NDT inspection, flare systems Niger Delta, SPDC contractor Nigeria",
  alternates: {
    canonical: "https://alphacapitald.com",
  },
  openGraph: {
    title: "Alpha Capital D | EPIC Services — Oil & Gas Nigeria",
    description:
      "Nigeria's leading EPIC services company. 15+ years delivering Oil & Gas, Power Generation and Construction projects for SPDC, Saipem & NAOC.",
    url: "https://alphacapitald.com",
  },
};

export default function Page() {
  return <HomeClient />;
}
