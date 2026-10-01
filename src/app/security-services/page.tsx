import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { RelatedServices } from "@/components/related-services";
import { ContactCta } from "@/components/contact-cta";

export const metadata: Metadata = {
  title: "Security Services",
  description:
    "Centrum's licensed and highly trained security personnel provide a visible and effective deterrent against crime, protecting residents and property across Greater Vancouver.",
};

const duties = [
  "Patrolling and safeguarding common areas and property",
  "Monitoring security cameras and responding to suspicious activity",
  "Providing emergency response assistance",
  "Enforcing strata by-laws, rules, and safety procedures",
  "Collaborating with property managers, building staff, and authorities",
  "Assisting with hazardous cleanups and other safety-related tasks",
  "Logging and reporting incidents and irregularities",
  "Ensuring 24/7 protection and peace of mind for residents",
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

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="Our security services include, but are not limited to..."
            description="Our team is equipped to monitor, respond to, and resolve security concerns promptly and professionally."
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
            Centrum&rsquo;s hands-on management approach ensures that our
            security staff meets the highest service standards and resolves
            any issues efficiently.
          </p>
        </div>
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
