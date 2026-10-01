import { Hero } from "@/components/home/hero";
import { WhyChoose } from "@/components/home/why-choose";
import { Services } from "@/components/home/services";
import { Reveal } from "@/components/motion";
import { ContactCta } from "@/components/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChoose />

      <section className="py-20">
        <Reveal>
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <p className="font-heading text-balance text-2xl font-extrabold text-foreground sm:text-3xl">
              Let us take care of the details, so you can feel secure and at
              ease in your home. Welcome to Centrum&mdash;where service meets
              peace of mind.
            </p>
          </div>
        </Reveal>
      </section>

      <ContactCta />
    </>
  );
}
