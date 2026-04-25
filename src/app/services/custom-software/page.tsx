import { ServiceDetailContent } from "@/src/components/sections/services/ServiceDetailContent";

export const metadata = {
  title: "Custom Software",
};

export default function CustomSoftwarePage() {
  return <ServiceDetailContent serviceId="software" />;
}
