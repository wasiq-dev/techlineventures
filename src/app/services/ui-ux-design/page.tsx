import type { Metadata } from "next";

import { ServiceDetailContent } from "@/src/components/sections/services/ServiceDetailContent";
import { buildServiceMetadata } from "@/src/lib/seo";

export const metadata: Metadata = buildServiceMetadata("uiux");

export default function Page() {
  return <ServiceDetailContent serviceId="uiux" />;
}