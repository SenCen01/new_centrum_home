import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactInfoPanel } from "@/components/contact/contact-info-panel";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Centrum Concierge & Security for questions about our services or to discuss a customized security solution.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        description="Whether you have questions about our services, need assistance, or want to discuss a customized security solution, our team is just a call or click away."
        image="/images/AdobeStock_69179589.jpeg"
        imageAlt="Security concierge on duty in a building lobby"
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <Reveal className="lg:col-span-2">
            <ContactInfoPanel />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-10">
              <h2 className="font-heading text-2xl font-black text-foreground">
                Send Us a Message
              </h2>
              <p className="mt-2 mb-8 text-muted-foreground">
                Fill out the form below, and one of our experts will get back
                to you promptly.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
