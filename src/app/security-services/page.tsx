import type { Metadata } from "next";
import { Eye, Siren, ClipboardCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceIntro } from "@/components/services/service-intro";
import { DutyCategories, type DutyCategory } from "@/components/services/duty-categories";
import { RelatedServices } from "@/components/related-services";
import { ContactCta } from "@/components/contact-cta";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Security Services",
  description:
    "Centrum's licensed and highly trained security personnel provide a visible and effective deterrent against crime, protecting residents and property across Greater Vancouver.",
};

const categories: DutyCategory[] = [
  {
    icon: <Eye />,
    title: "Patrol & Monitoring",
    duties: [
      "Patrolling and safeguarding common areas and property",
      "Monitoring security cameras and responding to suspicious activity",
      "Ensuring 24/7 protection and peace of mind for residents",
    ],
  },
  {
    icon: <Siren />,
    title: "Response & Compliance",
    duties: [
      "Providing emergency response assistance",
      "Enforcing strata by-laws, rules, and safety procedures",
      "Assisting with hazardous cleanups and other safety-related tasks",
    ],
  },
  {
    icon: <ClipboardCheck />,
    title: "Reporting & Collaboration",
    duties: [
      "Logging and reporting incidents and irregularities",
      "Collaborating with property managers, building staff, and authorities",
    ],
  },
];

export default function SecurityServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Residential"
        title="Security Services"
        description="The safety of your property and residents is our top priority. Centrum's licensed and highly trained security personnel provide a visible and effective deterrent against crime."
        image="/images/AdobeStock_529919432.jpeg"
        imageAlt="Security guard monitoring a building lobby"
      />

      <ServiceIntro
        eyebrow="Vigilant & Professional"
        title="A visible, effective deterrent against crime and activities that threaten your community."
        image="/images/AdobeStock_843909070.jpeg"
        imageAlt="Centrum security personnel on patrol"
        reverse
      >
        <p>
          Centrum&rsquo;s licensed and highly trained security personnel are
          equipped to monitor, respond to, and resolve security concerns
          promptly and professionally &mdash; protecting both residents and
          property with a hands-on management approach behind every shift.
        </p>
      </ServiceIntro>

      <section className="bg-muted/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="What We Do"
              title="Our security services include, but are not limited to..."
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
              &ldquo;Centrum&rsquo;s hands-on management approach ensures that
              our security staff meets the highest service standards and
              resolves any issues efficiently.&rdquo;
            </p>
          </div>
        </Reveal>
      </section>

      <RelatedServices
        title="Explore more services"
        items={[
          {
            title: "Concierge Services",
            description:
              "Warm, professional concierges who enhance the safety\nand comfort of your building for residents and visitors alike.",
            href: "/concierge-services",
          },
        ]}
      />

      <ContactCta />
    </>
  );
}
