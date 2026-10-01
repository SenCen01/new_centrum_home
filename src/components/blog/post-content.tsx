import { Rocket, Sparkles, Leaf, MapPin } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";

const whatsNext = [
  {
    icon: Rocket,
    title: "Innovative Technology Integration",
    description:
      "We're investing in state-of-the-art technology to enhance our security and concierge services.",
  },
  {
    icon: Sparkles,
    title: "Expanded Service Offerings",
    description:
      "New, tailored services designed to meet the unique needs of our clients, whether residential, corporate, or special events.",
  },
  {
    icon: Leaf,
    title: "Sustainability Initiatives",
    description: "Eco-friendly practices and solutions across our operations.",
  },
  {
    icon: MapPin,
    title: "Growing Reach",
    description:
      "Bringing our signature excellence to new communities across Greater Vancouver.",
  },
];

const tags = [
  "CentrumConcierge",
  "NewBeginnings",
  "Innovation",
  "Security",
  "ConciergeServices",
  "2025AndBeyond",
];

export function PostContent() {
  return (
    <>
      <section className="py-16">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col gap-5 text-base leading-relaxed text-foreground">
              <p>
                We&rsquo;re thrilled to announce the official launch of
                Centrum Concierge &amp; Security&rsquo;s brand-new website!
                This marks a significant milestone in our journey to provide
                exceptional service, innovation, and security solutions to
                our valued clients.
              </p>
              <p>
                Our new website is designed with you in mind&mdash;offering a
                sleek, user-friendly experience that makes it easier than ever
                to explore our services, connect with our team, and stay
                updated on the latest news and insights from Centrum. Whether
                you&rsquo;re looking for premium concierge services,
                cutting-edge security solutions, or simply want to learn more
                about who we are, our new platform is your gateway to it all.
              </p>
            </div>
          </Reveal>
        </article>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              Looking Ahead
            </span>
            <h2 className="mt-2 font-heading text-2xl font-black text-foreground sm:text-3xl">
              What&rsquo;s Next? 2025 and Beyond
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              2025 is shaping up to be a transformative year for Centrum.
              Here&rsquo;s a sneak peek at what&rsquo;s coming.
            </p>
          </Reveal>
          <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2">
            {whatsNext.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="size-5.5" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="py-16">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col gap-5 text-base leading-relaxed text-foreground">
              <p>
                This is just the beginning. We&rsquo;re dedicated to pushing
                boundaries, setting new standards, and delivering unparalleled
                value to our clients.
              </p>
              <p className="font-heading text-xl font-bold text-foreground">
                Here&rsquo;s to a secure, seamless, and extraordinary future.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </Reveal>
        </article>
      </section>
    </>
  );
}
