import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ContactCta } from "@/components/contact-cta";
import { blogPosts } from "@/lib/blog-posts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <section className="relative isolate flex h-[50vh] min-h-[360px] items-end overflow-hidden bg-brand-dark text-white">
        <Image src={post.image} alt={post.title} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-brand-dark/20" />
        <div className="relative mx-auto w-full max-w-3xl px-4 pb-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-wide text-white/70 uppercase">
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}{" "}
            &middot; Written by {post.author}
          </p>
          <h1 className="mt-3 font-heading text-3xl font-black tracking-tight text-balance sm:text-4xl">
            {post.title}
          </h1>
        </div>
      </section>

      <section className="py-16">
        <article className="mx-auto flex max-w-3xl flex-col gap-5 px-4 text-foreground sm:px-6 lg:px-8">
          <p>
            We&rsquo;re thrilled to announce the official launch of Centrum
            Concierge &amp; Security&rsquo;s brand-new website! This marks a
            significant milestone in our journey to provide exceptional
            service, innovation, and security solutions to our valued
            clients.
          </p>
          <p>
            Our new website is designed with you in mind&mdash;offering a
            sleek, user-friendly experience that makes it easier than ever to
            explore our services, connect with our team, and stay updated on
            the latest news and insights from Centrum. Whether you&rsquo;re
            looking for premium concierge services, cutting-edge security
            solutions, or simply want to learn more about who we are, our new
            platform is your gateway to it all.
          </p>
          <h2 className="mt-4 font-heading text-xl font-bold text-foreground">
            What&rsquo;s Next? 2025 and Beyond
          </h2>
          <p>
            While we&rsquo;re celebrating this exciting launch, we&rsquo;re
            also looking ahead to an even brighter future. Here&rsquo;s a
            sneak peek at what&rsquo;s coming:
          </p>
          <ul className="flex flex-col gap-3 pl-5 text-foreground marker:text-primary [&>li]:list-disc">
            <li>
              <strong>Innovative Technology Integration:</strong> We&rsquo;re
              investing in state-of-the-art technology to enhance our
              security and concierge services.
            </li>
            <li>
              <strong>Expanded Service Offerings:</strong> New, tailored
              services designed to meet the unique needs of our clients,
              whether for residential, corporate, or special events.
            </li>
            <li>
              <strong>Sustainability Initiatives:</strong> Eco-friendly
              practices and solutions across our operations.
            </li>
            <li>
              <strong>Growing Reach:</strong> Bringing our signature
              excellence to new communities across Greater Vancouver.
            </li>
          </ul>
          <h2 className="mt-4 font-heading text-xl font-bold text-foreground">
            Explore Our New Website Today
          </h2>
          <p>
            We invite you to explore the site and discover the Centrum
            difference. Thank you for being part of our journey&mdash;we&rsquo;re
            excited to embark on this next chapter with you!
          </p>
        </article>
      </section>

      <ContactCta />
    </>
  );
}
