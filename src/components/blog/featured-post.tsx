import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import type { BlogPost } from "@/lib/blog-posts";

export function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group grid overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl lg:grid-cols-2"
    >
      <div className="relative h-64 w-full overflow-hidden lg:h-full lg:min-h-96">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-5 left-5 rounded-full bg-primary px-3 py-1 text-xs font-semibold tracking-wide text-primary-foreground uppercase">
          Featured
        </span>
      </div>
      <div className="flex flex-col justify-center gap-5 p-8 sm:p-12">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-muted-foreground">
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
        <h2 className="font-heading text-2xl font-black text-balance text-foreground sm:text-3xl">
          {post.title}
        </h2>
        <p className="text-muted-foreground">{post.excerpt}</p>
        <span className="flex items-center gap-2 text-sm font-semibold text-primary">
          Read the full story
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
