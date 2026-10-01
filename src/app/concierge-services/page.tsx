import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { RelatedServices } from "@/components/related-services";
import { ContactCta } from "@/components/contact-cta";

export const metadata: Metadata = {
  title: "Concierge Services",
  description:
    "Centrum's residential concierges enhance the safety and comfort of your building while creating a warm, welcoming environment for residents and visitors.",
};

const duties = [
  "Assisting building residents and answering inquiries",
  "Welcoming and guiding guests and visitors",
  "Overseeing daily building activities and operations",
  "Managing facility access and building security",
  "Supervising visitor and residential parking",
  "Responding to complaints, providing solutions, or redirecting inquiries",
  "Assisting with item drop-offs and pick-ups",
  "Coordinating move-ins and move-outs",
  "Providing administrative support",
  "Logging irregularities, incidents, and daily communications",
  "Enforcing strata by-laws, rules, and safety procedures",
  "Coordinating and overseeing the use of building amenities",
  "Collaborating with building staff, tradespeople, and authorities",
  "Communicating noticeable facility deficiencies to building staff",
  "Supporting the overall operations of the site as a team player",
];

export default function ConciergeServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Residential"
        title="Concierge Services"
        description="At Centrum, our concierges are dedicated to enhancing the safety and comfort of your building while creating a warm and welcoming environment for residents and visitors alike."
        image="/images/AdobeStock_524480384.jpeg"
        imageAlt="Concierge greeting a resident at the front desk"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="Our concierge services include, but are not limited to..."
            description="Our customer-oriented approach ensures that every interaction is professional, efficient, and tailored to meet the unique needs of your community."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {duties.map((duty) => (
              <div key={duty} className="flex gap-3 rounded-2xl border border-border bg-card p-5">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <p className="text-sm text-foreground">{duty}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-muted-foreground">
            Our concierges are available 24/7 to ensure your building runs
            smoothly and your residents feel secure and well-cared for.
          </p>
        </div>
      </section>

      <RelatedServices
        title="Explore more services"
        items={[
          {
            title: "Security Services",
            description:
              "Licensed, trained security personnel providing a visible\ndeterrent against crime and rapid emergency response.",
            href: "/security-services",
          },
        ]}
      />

      <ContactCta />
    </>
  );
}
