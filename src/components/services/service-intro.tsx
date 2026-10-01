import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/motion";

export function ServiceIntro({
  eyebrow,
  title,
  children,
  image,
  imageAlt,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}) {
  return (
    <section className="py-20 sm:py-28">
      <div
        className={`mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <Reveal>
          <div className="relative h-80 overflow-hidden rounded-3xl sm:h-96">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            {eyebrow}
          </span>
          <p className="mt-4 font-heading text-2xl font-extrabold text-balance text-foreground sm:text-3xl">
            {title}
          </p>
          <div className="mt-5 flex flex-col gap-4 text-muted-foreground">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}
