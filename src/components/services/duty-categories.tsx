"use client";

import type { ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/motion";

export type DutyCategory = {
  icon: ReactNode;
  title: string;
  duties: string[];
};

export function DutyCategories({ categories }: { categories: DutyCategory[] }) {
  return (
    <StaggerGroup className="grid gap-6 lg:grid-cols-3">
      {categories.map((category) => (
        <StaggerItem
          key={category.title}
          className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
        >
          <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary [&_svg]:size-6">
            {category.icon}
          </div>
          <h3 className="font-heading text-lg font-bold text-foreground">{category.title}</h3>
          <ul className="flex flex-col gap-2.5">
            {category.duties.map((duty) => (
              <li key={duty} className="flex gap-2.5 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                {duty}
              </li>
            ))}
          </ul>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
