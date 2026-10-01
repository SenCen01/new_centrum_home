import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Clock, HeartHandshake, Siren } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { TrustPillars } from "@/components/trust-pillars";
import { DifferenceGrid, type DifferenceItem } from "@/components/difference-grid";
import { ContactCta } from "@/components/contact-cta";
import { cn } from "@/lib/utils";

const whyChooseItems: DifferenceItem[] = [
  {
    icon: HeartHandshake,
    title: "Professionalism, Experience, and Passion",
    description:
      "Our dedicated team raises the bar for residential concierge and security services in the region.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Centrum management and personnel are always ready to respond to your needs and emergencies, day or night.",
  },
  {
    icon: ShieldCheck,
    title: "Enhanced Safety and Welcoming Environments",
    description:
      "Our concierges not only ensure the security of your building but also create a warm, customer-oriented atmosphere.",
  },
  {
    icon: Siren,
    title: "Crime Deterrence and Rapid Response",
    description:
      "Our trained security staff effectively monitor and address suspicious activities, taking appropriate action to protect residents and property.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-[85vh] items-center overflow-hidden bg-brand-dark text-white">
        <Image
          src="/images/AdobeStock_69179589.jpeg"
          alt="Security concierge on duty in a building lobby"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/40" />
        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-7 px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="max-w-3xl font-heading text-4xl font-black tracking-tight text-balance sm:text-6xl">
            Your Trusted Partner in Residential Concierge and Security Services
          </h1>
          <p className="max-w-xl text-lg text-white/80">
            At Centrum, we are proud to be Greater Vancouver&rsquo;s leading
            provider of residential concierge and security services. Our
            commitment to reliability, warmth, and personalized care sets us
            apart.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
              Contact Us
            </Link>
            <Link
              href="/concierge-services"
              className={cn(
                buttonVariants({ size: "lg", variant: "secondary" }),
                "bg-white/10 text-white hover:bg-white/20"
              )}
            >
              Our Services
            </Link>
          </div>
          <TrustPillars className="mt-4 text-white/90 [&_svg]:text-primary" />
        </div>
      </section>

      <DifferenceGrid title="Why Choose Centrum?" items={whyChooseItems} />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-heading text-balance text-2xl font-extrabold text-foreground sm:text-3xl">
            Let us take care of the details, so you can feel secure and at
            ease in your home. Welcome to Centrum&mdash;where service meets
            peace of mind.
          </p>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
