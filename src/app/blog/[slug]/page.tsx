import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { PostContent } from "@/components/blog/post-content";
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
      <section className="relative isolate flex h-[55vh] min-h-96 items-end overflow-hidden bg-brand-dark text-white">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/30" />
        <div className="relative mx-auto w-full max-w-3xl px-4 pb-14 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="mb-6 flex w-fit items-center gap-2 text-sm font-medium text-white/80 hover:text-white"
          >
            <ArrowLeft className="size-4" />
            Back to Blog
          </Link>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-white/70">
            <span className="flex items-center gap-1.5">
              <Calendar className="size-3.5" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="size-3.5" />
              {post.author}
            </span>
          </div>
          <h1 className="mt-3 font-heading text-3xl font-black tracking-tight text-balance sm:text-5xl">
            {post.title}
          </h1>
        </div>
      </section>

      <PostContent />

      <ContactCta />
    </>
  );
}
