import { SectionHeading } from "@/components/section-heading";
import { ServiceHubCard } from "@/components/service-hub-card";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";

const services = [
  {
    title: "Concierge Services",
    description:
      "Warm, professional concierges who enhance the safety and comfort of your building while creating a welcoming environment for residents and visitors.",
    href: "/concierge-services",
    image: "/images/AdobeStock_524480384.jpeg",
    imageAlt: "Concierge greeting a resident at the front desk",
  },
  {
    title: "Security Services",
    description:
      "Licensed, highly trained security personnel providing a visible and effective deterrent against crime, day and night.",
    href: "/security-services",
    image: "/images/AdobeStock_529919432.jpeg",
    imageAlt: "Security guard monitoring a building lobby",
  },
];

export function Services() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="What We Offer" title="Two Ways We Keep You Covered" />
        </Reveal>
        <StaggerGroup className="mt-12 grid gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <StaggerItem key={service.href}>
              <ServiceHubCard {...service} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
