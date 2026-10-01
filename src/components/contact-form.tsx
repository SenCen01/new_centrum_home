"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitContactRequest, type ContactFormState } from "@/app/actions";
import { CheckCircle2, Loader2 } from "lucide-react";

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactRequest, initialState);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-primary/20 bg-primary/5 px-6 py-10 text-center">
        <CheckCircle2 className="size-10 text-primary" />
        <p className="text-lg font-medium text-foreground">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="firstName">First name *</Label>
          <Input id="firstName" name="firstName" autoComplete="given-name" required />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="lastName">Last name *</Label>
          <Input id="lastName" name="lastName" autoComplete="family-name" required />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone number</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="serviceInterest">What are you looking for? *</Label>
        <Select name="serviceInterest" required>
          <SelectTrigger id="serviceInterest" className="w-full">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="concierge">Concierge Services</SelectItem>
            <SelectItem value="security">Security Services</SelectItem>
            <SelectItem value="both">Both</SelectItem>
            <SelectItem value="careers">Careers</SelectItem>
            <SelectItem value="other">Something else</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="message">How can we help?</Label>
        <Textarea id="message" name="message" rows={4} />
      </div>
      {state.status === "error" && (
        <p className="text-sm font-medium text-destructive">{state.message}</p>
      )}
      <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
        {pending && <Loader2 className="size-4 animate-spin" />}
        Send Message
      </Button>
    </form>
  );
}
