import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ComingSoon } from "@/components/case-studies/coming-soon";
import { ContactCta } from "@/components/contact-cta";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Centrum Concierge & Security is building a portfolio of success stories across Greater Vancouver. Check back soon.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Case Studies"
        description="At Centrum Concierge & Security, we take pride in delivering exceptional service and tailored solutions to meet our clients' unique needs."
        image="/images/AdobeStock_535330086.jpeg"
        imageAlt="Centrum security personnel on patrol"
      />

      <ComingSoon />

      <ContactCta />
    </>
  );
}
