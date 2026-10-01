import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { site } from "@/lib/site";

export function ContactInfoPanel() {
  return (
    <div className="relative flex h-full flex-col justify-between gap-10 overflow-hidden rounded-3xl bg-brand-dark p-8 text-white sm:p-10">
      <div
        aria-hidden
        className="absolute -top-16 -right-16 size-64 rounded-full bg-primary/20 blur-3xl"
      />
      <div className="relative flex flex-col gap-2">
        <span className="text-xs font-semibold tracking-widest text-primary uppercase">
          Let&rsquo;s Talk
        </span>
        <h2 className="font-heading text-2xl font-black text-balance sm:text-3xl">
          We&rsquo;re just a call or click away.
        </h2>
      </div>

      <dl className="relative flex flex-col gap-6">
        <a href={site.phoneHref} className="flex items-start gap-4 hover:text-primary">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
            <Phone className="size-4.5" />
          </span>
          <div>
            <dt className="text-xs font-semibold tracking-wide text-white/60 uppercase">
              Call Us
            </dt>
            <dd className="font-medium">{site.phone}</dd>
          </div>
        </a>
        <a href={`mailto:${site.email}`} className="flex items-start gap-4 hover:text-primary">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
            <Mail className="size-4.5" />
          </span>
          <div>
            <dt className="text-xs font-semibold tracking-wide text-white/60 uppercase">
              Email Us
            </dt>
            <dd className="font-medium">{site.email}</dd>
          </div>
        </a>
        <div className="flex items-start gap-4">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
            <MapPin className="size-4.5" />
          </span>
          <div>
            <dt className="text-xs font-semibold tracking-wide text-white/60 uppercase">
              Visit Us
            </dt>
            <dd className="font-medium">
              {site.address.line1}
              <br />
              {site.address.city} {site.address.postal}
            </dd>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
            <Clock className="size-4.5" />
          </span>
          <div>
            <dt className="text-xs font-semibold tracking-wide text-white/60 uppercase">
              Business Hours
            </dt>
            {site.hours.map((h) => (
              <dd key={h.label} className="font-medium text-white/90">
                {h.label}: {h.value}
              </dd>
            ))}
          </div>
        </div>
      </dl>
    </div>
  );
}
