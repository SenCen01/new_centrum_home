import type { Metadata } from "next";
import { Newspaper } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { FeaturedPost } from "@/components/blog/featured-post";
import { ContactCta } from "@/components/contact-cta";
import { Reveal } from "@/components/motion";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Centrum Insights — helpful tips, stories, and news from Centrum Concierge & Security.",
};

export default function BlogPage() {
  const [latest] = blogPosts;

  return (
    <>
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Centrum Insights"
              title="Our Blog"
              description="Helpful tips, stories, and news from the Centrum team."
            />
          </Reveal>

          {latest && (
            <Reveal delay={0.1} className="mt-12">
              <FeaturedPost post={latest} />
            </Reveal>
          )}

          <Reveal delay={0.15}>
            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-dashed border-border bg-muted/40 px-6 py-5 text-sm text-muted-foreground">
              <Newspaper className="size-5 shrink-0 text-primary" />
              More stories are on the way as we continue to grow across Greater
              Vancouver &mdash; check back soon.
            </div>
          </Reveal>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
