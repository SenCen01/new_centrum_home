import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
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
        imageAlt="Residential building Centrum serves"
      />

      <section className="py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-muted-foreground">
            While we don&rsquo;t have any case studies to share just yet,
            we&rsquo;re actively working on creating impactful stories that
            showcase our expertise and dedication. Stay tuned as we continue
            to build our portfolio of success stories.
          </p>
          <p className="mt-4 text-muted-foreground">
            In the meantime, feel free to explore our services and reach out
            to learn how we can support your security and concierge needs.
            Your trust is our priority, and we look forward to sharing our
            journey with you soon!
          </p>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
