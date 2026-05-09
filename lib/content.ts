/* ============================================================================
   CONTENT — All copy and data as typed constants
   ============================================================================ */

export interface Service {
  number: string;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

/* ============================================================================
   NAVIGATION
   ============================================================================ */
export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Partnership", href: "#partnership" },
  { label: "Contact", href: "#contact" },
];

export const BRAND_NAME = "Aodigy";

/* ============================================================================
   HERO
   ============================================================================ */
export const HERO = {
  headline: "From Strategy — to Delivery.",
  pullQuote:
    "True transformation isn't about technology. It's about enabling people to work smarter, faster, and with more confidence.",
  pullQuoteAuthor: "Katja Kraus, Founder",
};

/* ============================================================================
   ABOUT
   ============================================================================ */
export const ABOUT = {
  watermark: "Katja Kraus",
  text: `Katja Kraus founded Aodigy with 15+ years of enterprise transformation experience. As a consultant at SAP, she guided Fortune 500 companies through complex system implementations, managing multimillion-dollar programs across 40+ countries.

She holds a degree in Political Science from Heidelberg University, and an MSc in Business Informatics from the University of Mannheim. Her expertise spans enterprise architecture, project management, organizational change, and HR transformation—bringing both technical depth and human-centered design to every engagement.

Today, Aodigy partners with mid-market enterprises and ambitious scale-ups to deliver transformations that stick. Not because they're flawlessly executed—but because they're rooted in strategy, built on buy-in, and designed for real people.`,
};

/* ============================================================================
   SERVICES
   ============================================================================ */
export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Fit-Gap Analysis",
    description:
      "Deep strategic audit: where you are, where you need to be, and what bridges the gap.",
  },
  {
    number: "02",
    title: "Implementation Project",
    description:
      "End-to-end program delivery: scope, design, build, test, and go-live readiness.",
  },
  {
    number: "03",
    title: "Roll-Out & Change Management",
    description:
      "Organizational adoption: training, communication, and sustained performance.",
  },
  {
    number: "04",
    title: "Solution Support",
    description:
      "Post-go-live partnership: optimization, troubleshooting, and continuous improvement.",
  },
];

/* ============================================================================
   PARTNERSHIP
   ============================================================================ */
export const PARTNERSHIP = {
  intro: "Exclusive Partner",
  partner: "Virtualbadge.io",
  testimonial: `Katja and the Aodigy team bring a rare combination: deep technical knowledge, strategic clarity, and genuine care for implementation outcomes. They don't just deliver—they enable.`,
  testimonialAuthor: "Malte Zander, Founder & CEO",
  testimonialRole: "Virtualbadge.io",
};

/* ============================================================================
   CTA
   ============================================================================ */
export const CTA = {
  headline: "Ready to Transform?",
  subheadline: "Let's talk about what's possible.",
  email: "info@aodigyconsulting.com",
  emailLabel: "Get in touch",
};

/* ============================================================================
   FOOTER
   ============================================================================ */
export const FOOTER = {
  brand: "Aodigy",
  links: [
    { label: "Imprint", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
  socialLinks: [{ label: "LinkedIn", href: "https://linkedin.com" }],
};
