import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ContactCta } from "@/components/contact-cta";
import { site } from "@/lib/site";

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

      <section className="py-20">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-8 text-center">
            <MapPin className="size-6 text-primary" />
            <h3 className="font-heading font-bold text-foreground">Visit Us</h3>
            <p className="text-sm text-muted-foreground">
              {site.address.line1}
              <br />
              {site.address.city} {site.address.postal}
            </p>
          </div>
          <a
            href={site.phoneHref}
            className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-8 text-center transition-colors hover:border-primary/40"
          >
            <Phone className="size-6 text-primary" />
            <h3 className="font-heading font-bold text-foreground">Call Us</h3>
            <p className="text-sm text-muted-foreground">{site.phone}</p>
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-8 text-center transition-colors hover:border-primary/40"
          >
            <Mail className="size-6 text-primary" />
            <h3 className="font-heading font-bold text-foreground">Email Us</h3>
            <p className="text-sm text-muted-foreground">{site.email}</p>
          </a>
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-8 text-center">
            <Clock className="size-6 text-primary" />
            <h3 className="font-heading font-bold text-foreground">Business Hours</h3>
            <div className="text-sm text-muted-foreground">
              {site.hours.map((h) => (
                <p key={h.label}>
                  {h.label}: {h.value}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
