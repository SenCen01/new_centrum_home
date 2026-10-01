export const site = {
  name: "Centrum",
  legalName: "Centrum Concierge & Security Ltd.",
  phone: "604-396-1806",
  phoneHref: "tel:+16043961806",
  email: "info@centrumconcierge.com",
  address: {
    line1: "170-422 Richards St",
    city: "Vancouver, BC",
    postal: "V6B 2Z4",
  },
  hours: [
    { label: "Monday - Friday", value: "8:00 AM - 5:00 PM" },
    { label: "Saturday", value: "Closed" },
    { label: "Sunday", value: "Closed" },
  ],
  serviceArea:
    "Centrum is Greater Vancouver's premier provider of concierge and security services.",
};

export type NavLink = { label: string; href: string; description?: string };

export const serviceLinks: NavLink[] = [
  {
    label: "Concierge Services",
    href: "/concierge-services",
    description: "Warm, professional concierges for your residential building.",
  },
  {
    label: "Security Services",
    href: "/security-services",
    description: "Licensed, trained security personnel on-site 24/7.",
  },
];

export const mainNav = [
  {
    label: "Services",
    href: "/concierge-services",
    children: serviceLinks,
  },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export const footerLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Concierge Services", href: "/concierge-services" },
  { label: "Security Services", href: "/security-services" },
  { label: "Blog", href: "/blog" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export const trustPillars = ["Reliable", "Welcoming", "Unique"];
