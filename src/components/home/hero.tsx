import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { TrustPillars } from "@/components/trust-pillars";
import { ParallaxImage } from "@/components/motion";
import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[90vh] items-center overflow-hidden bg-brand-dark text-white">
      <ParallaxImage
        src="/images/AdobeStock_69179589.jpeg"
        alt="Security concierge on duty in a building lobby"
        sizes="100vw"
        className="object-cover"
        wrapperClassName="absolute inset-0"
        range={50}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/40" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-7 px-4 py-24 sm:px-6 lg:px-8">
        <Reveal y={16}>
          <span className="flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase backdrop-blur">
            <ShieldCheck className="size-3.5 text-primary" />
            Licensed Security Personnel
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="max-w-3xl font-heading text-4xl font-black tracking-tight text-balance sm:text-6xl">
            Your Trusted Partner in Residential Concierge and Security
            Services
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="max-w-xl text-lg text-white/80">
            At Centrum, we are proud to be Greater Vancouver&rsquo;s leading
            provider of residential concierge and security services. Our
            commitment to reliability, warmth, and personalized care sets us
            apart.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
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
        </Reveal>
        <Reveal delay={0.32}>
          <TrustPillars className="mt-4 text-white/90 [&_svg]:text-primary" />
        </Reveal>
      </div>
    </section>
  );
}
