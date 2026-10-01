import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ContactCta() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-dark py-20 text-white">
        <div
          aria-hidden
          className="absolute -top-24 -left-24 size-96 rounded-full bg-primary/25 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -right-24 -bottom-24 size-96 rounded-full bg-primary/15 blur-3xl"
        />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-balance text-2xl font-extrabold sm:text-3xl">
            {site.serviceArea}
          </h2>
          <Link href="#contact" className={cn(buttonVariants({ size: "lg" }))}>
            Get In Touch
          </Link>
        </div>
      </section>
      <section id="contact" className="scroll-mt-24 bg-background py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground">
              Get In Touch
            </h2>
            <p className="mt-2 text-muted-foreground">
              Fill out the form below, and one of our experts will get back to you promptly.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
