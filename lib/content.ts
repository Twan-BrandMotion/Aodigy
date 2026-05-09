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
  { label: "Join", href: "#recruitment" },
  { label: "Contact", href: "#contact" },
];

export const BRAND_NAME = "Aodigy";

/* ============================================================================
   HERO
   ============================================================================ */
export const HERO = {
  headline: "From Strategy — to Delivery.",
  pullQuote:
    "Every obstacle is an opportunity to learn, grow, and excel.",
  pullQuoteAuthor: "Katja Kraus, Founder",
};

/* ============================================================================
   ABOUT
   ============================================================================ */
export const ABOUT = {
  watermark: "Katja Kraus",
  text: `Katja Kraus founded Aodigy after building her career across SAP consulting, project management, and HR leadership. She holds a degree in Political Science and an MSc in Business Informatics from the University of Mannheim. Her approach combines technical depth with a genuine focus on people — because the best transformations succeed not just technically, but because teams are brought along, not left behind.`,
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
  testimonial: `Aodigy brings years of expertise in managing IT projects, ensuring our customers maximize the value of Virtualbadge within their organizations. We are proud of our partnership and look forward to many more successful projects together.`,
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
   RECRUITMENT
   ============================================================================ */
export const RECRUITMENT = {
  label: "Careers",
  headline: "We're growing. Are you a project manager or consultant looking for your next challenge?",
  email: "info@aodigyconsulting.com",
  emailSubject: "I want to join the team!",
  emailLabel: "Send your application →",
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
