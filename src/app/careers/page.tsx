import type { Metadata } from "next";
import { buttonVariants } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { ContactCta } from "@/components/contact-cta";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Centrum team. We invest in our employees through ongoing training, hands-on management support, and a collaborative environment.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Join Our Team"
        title="Career Opportunities"
        description="At Centrum Concierge & Security, we are committed to investing in our employees through ongoing training, hands-on management support, and a collaborative environment."
        image="/images/AdobeStock_260281551.jpeg"
        imageAlt="Centrum team member on the job"
      />

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-muted-foreground">
            We believe that a job should be more than just a role&mdash;it
            should be the foundation for a fulfilling career. That&rsquo;s why
            we actively motivate and support our staff in building long-term
            careers with us. As a growing company, we are always on the
            lookout for talented individuals to join our dynamic team.
          </p>
          <p className="mt-4 text-muted-foreground">
            If you&rsquo;re seeking a full-time or part-time position,
            we&rsquo;d love to hear from you! Please email your resume to{" "}
            <a href={`mailto:${site.email}`} className="font-medium text-primary">
              {site.email}
            </a>
            .
          </p>
          <a
            href={`mailto:${site.email}`}
            className={cn(buttonVariants({ size: "lg" }), "mt-6")}
          >
            Apply Now
          </a>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
