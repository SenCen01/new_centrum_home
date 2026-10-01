import { ShieldCheck, Clock, HeartHandshake, Siren, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";

type Item = { icon: LucideIcon; title: string; description: string };

const items: Item[] = [
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

export function WhyChoose() {
  return (
    <section className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="Why Centrum" title="Why Choose Centrum?" />
        </Reveal>
        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <StaggerItem key={item.title}>
              <div className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="size-6" />
                </div>
                <h3 className="font-heading font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
