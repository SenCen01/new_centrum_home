import type { Metadata } from "next";
import { Headset, Clock, SlidersHorizontal, GraduationCap, Users } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { DifferenceGrid, type DifferenceItem } from "@/components/difference-grid";
import { ContactCta } from "@/components/contact-cta";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Centrum is Greater Vancouver's premier provider of concierge and security services, delivering reliable, welcoming, and tailored solutions in partnership with our clients.",
};

const benefits: DifferenceItem[] = [
  {
    icon: Headset,
    title: "Hands-on management involvement",
    description:
      "In the day-to-day operations of every site, ensuring that issues and concerns are addressed promptly and efficiently.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Of management and personnel, ready to respond to any needs or emergencies at any time.",
  },
  {
    icon: SlidersHorizontal,
    title: "Customized Services",
    description:
      "Designed to meet the unique needs of our clients and the specific requirements of each site.",
  },
  {
    icon: GraduationCap,
    title: "Highly trained & supported employees",
    description: "Who are committed to exceeding service standards.",
  },
  {
    icon: Users,
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

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-muted-foreground">
            We are dedicated to ensuring the safety, well-being, and
            satisfaction of all residents. At Centrum, we believe in the power
            of teamwork. We approach each building as integral members of a
            collaborative team, working seamlessly with building staff,
            strata councils, and property managers to deliver exceptional
            service to our clients and their residents.
          </p>
        </div>
      </section>

      <DifferenceGrid title="Our clients benefit from..." items={benefits} />

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-heading text-balance text-2xl font-extrabold text-foreground sm:text-3xl">
            Centrum is committed to serving our clients with excellence and
            building strong, lasting partnerships.
          </p>
          <p className="mt-4 text-muted-foreground">
            We take pride in being a trusted name in concierge and security
            services across Greater Vancouver.
          </p>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
