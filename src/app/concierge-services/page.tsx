import type { Metadata } from "next";
import { Smile, ClipboardList, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceIntro } from "@/components/services/service-intro";
import { DutyCategories, type DutyCategory } from "@/components/services/duty-categories";
import { RelatedServices } from "@/components/related-services";
import { ContactCta } from "@/components/contact-cta";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Concierge Services",
  description:
    "Centrum's residential concierges enhance the safety and comfort of your building while creating a warm, welcoming environment for residents and visitors.",
};

const categories: DutyCategory[] = [
  {
    icon: <Smile />,
    title: "Resident & Visitor Experience",
    duties: [
      "Assisting building residents and answering inquiries",
      "Welcoming and guiding guests and visitors",
      "Responding to complaints, providing solutions, or redirecting inquiries",
      "Assisting with item drop-offs and pick-ups",
    ],
  },
  {
    icon: <ClipboardList />,
    title: "Building Operations",
    duties: [
      "Overseeing daily building activities and operations",
      "Managing facility access and building security",
      "Supervising visitor and residential parking",
      "Coordinating move-ins and move-outs",
      "Providing administrative support",
      "Coordinating and overseeing the use of building amenities",
    ],
  },
  {
    icon: <ShieldCheck />,
    title: "Safety & Compliance",
    duties: [
      "Logging irregularities, incidents, and daily communications",
      "Enforcing strata by-laws, rules, and safety procedures",
      "Collaborating with building staff, tradespeople, and authorities",
      "Communicating noticeable facility deficiencies to building staff",
      "Supporting the overall operations of the site as a team player",
    ],
  },
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

      <ServiceIntro
        eyebrow="Customer-Oriented, Always"
        title="Every interaction is professional, efficient, and tailored to your community."
        image="/images/AdobeStock_764243244.jpeg"
        imageAlt="Centrum concierge assisting a building resident"
      >
        <p>
          Our customer-oriented approach ensures that every interaction is
          professional, efficient, and tailored to meet the unique needs of
          your community. Our concierges are dedicated to enhancing the
          safety and comfort of your building while creating a warm and
          welcoming environment for residents and visitors alike.
        </p>
      </ServiceIntro>

      <section className="bg-muted/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="What We Do"
              title="Our concierge services include, but are not limited to..."
            />
          </Reveal>
          <div className="mt-14">
            <DutyCategories categories={categories} />
          </div>
        </div>
      </section>

      <section className="py-20">
        <Reveal>
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p className="font-heading text-balance text-2xl font-extrabold text-foreground sm:text-3xl">
              &ldquo;Our concierges are available 24/7 to ensure your building
              runs smoothly and your residents feel secure and
              well-cared for.&rdquo;
            </p>
          </div>
        </Reveal>
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
