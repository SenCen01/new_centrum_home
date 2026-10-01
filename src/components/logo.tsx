import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/CentrumLogo.png"
      alt="Centrum Concierge & Security Ltd."
      width={1454}
      height={407}
      priority
      className={cn("h-14 w-auto shrink-0 self-start sm:h-16", className)}
    />
  );
}
