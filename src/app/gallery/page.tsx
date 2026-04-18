import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Visual showcase of Alpha Capital D's projects, operations, equipment and team across Nigeria's oil & gas and construction sector. See our work across the Niger Delta and beyond.",
  alternates: {
    canonical: "https://alphacapitald.com/gallery",
  },
  openGraph: {
    title: "Gallery | Alpha Capital D",
    description:
      "Visual showcase of Alpha Capital D's projects, operations and team across Nigeria's energy sector.",
    url: "https://alphacapitald.com/gallery",
  },
};

export default function Page() {
  return <GalleryClient />;
}
