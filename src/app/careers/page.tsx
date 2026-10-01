import type { Metadata } from "next";
import { GraduationCap, Handshake, TrendingUp, Mail } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ValuesGrid, type CareerValue } from "@/components/careers/values-grid";
import { ContactCta } from "@/components/contact-cta";
import { Reveal } from "@/components/motion";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Centrum team. We invest in our employees through ongoing training, hands-on management support, and a collaborative environment.",
};

const values: CareerValue[] = [
  {
    icon: <GraduationCap />,
    title: "Ongoing Training",
    description:
      "We invest in our people with continuous training so you're set up to succeed on every shift.",
  },
  {
    icon: <Handshake />,
    title: "Hands-On Support",
    description:
      "Our management team is hands-on and accessible, never leaving you to figure things out alone.",
  },
  {
    icon: <TrendingUp />,
    title: "Long-Term Growth",
    description:
      "We actively motivate and support our staff in building long-term, fulfilling careers with us.",
  },
];

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

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Why Centrum"
              title="A career, not just a role"
              description="We believe that a job should be more than just a role—it should be the foundation for a fulfilling career. As a growing company, we're always on the lookout for talented individuals to join our dynamic team."
            />
          </Reveal>
          <div className="mt-14">
            <ValuesGrid items={values} />
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-3xl border border-primary/20 bg-primary/5 px-6 py-10 text-center sm:px-10">
            <Mail className="size-8 text-primary" />
            <p className="font-heading text-xl font-bold text-foreground sm:text-2xl">
              Ready to join our team?
            </p>
            <p className="max-w-xl text-muted-foreground">
              If you&rsquo;re seeking a full-time or part-time position,
              we&rsquo;d love to hear from you. Email your resume to{" "}
              <a href={`mailto:${site.email}`} className="font-medium text-primary">
                {site.email}
              </a>
              .
            </p>
            <a href={`mailto:${site.email}`} className={cn(buttonVariants({ size: "lg" }), "mt-2")}>
              Apply Now
            </a>
          </div>
        </Reveal>
      </section>

      <ContactCta />
    </>
  );
}
