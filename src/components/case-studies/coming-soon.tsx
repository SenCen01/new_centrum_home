import Link from "next/link";
import { Hourglass, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ComingSoon() {
  return (
    <section className="py-20 sm:py-28">
      <Reveal>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Hourglass className="size-7" />
          </div>
          <h2 className="font-heading text-2xl font-black text-foreground sm:text-3xl">
            Our story is just getting started
          </h2>
          <p className="text-muted-foreground">
            At Centrum Concierge &amp; Security, we take pride in delivering
            exceptional service and tailored solutions to meet our
            clients&rsquo; unique needs. While we don&rsquo;t have any case
            studies to share just yet, we&rsquo;re actively working on
            creating impactful stories that showcase our expertise and
            dedication.
          </p>
          <p className="text-muted-foreground">
            Stay tuned as we continue to build our portfolio of success
            stories. In the meantime, feel free to explore our services and
            reach out to learn how we can support your security and concierge
            needs. Your trust is our priority, and we look forward to sharing
            our journey with you soon!
          </p>
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "mt-2")}>
            Start a Conversation
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
