"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, ChevronDown } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { serviceLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Careers", href: "/careers" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center py-2">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={cn(
                "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground",
                pathname.includes("services") && "text-primary"
              )}
            >
              Services
              <ChevronDown className="size-3.5" />
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-2">
                <div className="flex flex-col gap-1 rounded-2xl border border-border bg-popover p-3 text-popover-foreground shadow-xl">
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-xl p-3 transition-colors hover:bg-muted"
                    >
                      <p className="text-sm font-semibold text-foreground">{item.label}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{item.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground",
                pathname === link.href && "text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary"
          >
            <Phone className="size-4" />
            {site.phone}
          </a>
          <Button render={<Link href="/contact" />}>Contact Us</Button>
        </div>

        <Sheet>
          <SheetTrigger
            render={<Button variant="ghost" size="icon" className="xl:hidden" />}
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="flex w-[85vw] max-w-sm flex-col gap-0 p-0">
            <SheetHeader className="border-b border-border px-6 py-5">
              <SheetTitle className="sr-only">Main menu</SheetTitle>
              <Logo className="h-12 sm:h-12" />
            </SheetHeader>
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-4">
              <p className="px-3 pt-1 pb-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Services
              </p>
              {serviceLinks.map((item) => (
                <SheetClose
                  key={item.href}
                  render={
                    <Link
                      href={item.href}
                      className="rounded-md px-3 py-2 text-base font-medium hover:bg-muted"
                    />
                  }
                >
                  {item.label}
                </SheetClose>
              ))}

              <div className="mt-2 border-t border-border pt-2">
                {navLinks.map((link) => (
                  <SheetClose
                    key={link.href}
                    render={
                      <Link
                        href={link.href}
                        className="block rounded-md px-3 py-3 text-base font-medium hover:bg-muted"
                      />
                    }
                  >
                    {link.label}
                  </SheetClose>
                ))}
                <SheetClose
                  render={
                    <Link
                      href="/contact"
                      className="block rounded-md px-3 py-3 text-base font-medium hover:bg-muted"
                    />
                  }
                >
                  Contact Us
                </SheetClose>
              </div>
            </nav>
            <div className="flex flex-col gap-3 border-t border-border px-6 py-5">
              <a href={site.phoneHref} className="flex items-center gap-2 text-sm font-semibold">
                <Phone className="size-4" />
                {site.phone}
              </a>
              <SheetClose
                render={
                  <Link href="/contact" className={buttonVariants({ className: "w-full" })} />
                }
              >
                Contact Us
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
