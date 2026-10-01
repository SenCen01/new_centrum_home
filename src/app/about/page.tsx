import type { Metadata } from "next";
import Image from "next/image";
import { Headset, Clock, SlidersHorizontal, GraduationCap, Users } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { BenefitTimeline, type BenefitItem } from "@/components/about/benefit-timeline";
import { ContactCta } from "@/components/contact-cta";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Centrum is Greater Vancouver's premier provider of concierge and security services, delivering reliable, welcoming, and tailored solutions in partnership with our clients.",
};

const benefits: BenefitItem[] = [
  {
    icon: <Headset />,
    title: "Hands-on management involvement",
    description:
      "In the day-to-day operations of every site, ensuring that issues and concerns are addressed promptly and efficiently.",
  },
  {
    icon: <Clock />,
    title: "24/7 Availability",
    description:
      "Of management and personnel, ready to respond to any needs or emergencies at any time.",
  },
  {
    icon: <SlidersHorizontal />,
    title: "Customized Services",
    description:
      "Designed to meet the unique needs of our clients and the specific requirements of each site.",
  },
  {
    icon: <GraduationCap />,
    title: "Highly trained & supported employees",
    description: "Who are committed to exceeding service standards.",
  },
  {
    icon: <Users />,
    title: "A reliable, welcoming, client-focused team",
    description: "Dedicated to delivering outstanding results.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Centrum is Greater Vancouver's premier provider of concierge and security services."
        description="Our mission is to deliver reliable, welcoming, and tailored concierge and security solutions by collaborating closely with our clients to understand their unique needs and objectives."
        image="/images/AdobeStock_297604234.jpeg"
        imageAlt="Centrum team collaborating with building staff"
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <Reveal>
            <div className="relative h-80 overflow-hidden rounded-3xl sm:h-96">
              <Image
                src="/images/AdobeStock_764243293.jpeg"
                alt="Centrum staff member supporting a residential building"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              Our Mission
            </span>
            <p className="mt-4 font-heading text-2xl font-extrabold text-balance text-foreground sm:text-3xl">
              We are dedicated to ensuring the safety, well-being, and
              satisfaction of every resident we serve.
            </p>
            <p className="mt-5 text-muted-foreground">
              At Centrum, we believe in the power of teamwork. We approach
              each building as integral members of a collaborative team,
              working seamlessly with building staff, strata councils, and
              property managers to deliver exceptional service to our clients
              and their residents.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Why Centrum"
              title="Our clients benefit from..."
              className="mb-14"
            />
          </Reveal>
          <BenefitTimeline
            items={benefits}
            image="/images/AdobeStock_297604234.jpeg"
            imageAlt="Centrum team collaborating with building staff"
          />
        </div>
      </section>

      <section className="py-20">
        <Reveal>
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p className="font-heading text-balance text-2xl font-extrabold text-foreground sm:text-3xl">
              &ldquo;Centrum is committed to serving our clients with
              excellence and building strong, lasting partnerships.&rdquo;
            </p>
            <p className="mt-4 text-muted-foreground">
              We take pride in being a trusted name in concierge and security
              services across Greater Vancouver.
            </p>
          </div>
        </Reveal>
      </section>

      <ContactCta />
    </>
  );
}
