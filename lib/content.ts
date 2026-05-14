/* ============================================================================
   CONTENT — All copy and data as typed constants
   ============================================================================ */

export const content = {
  en: {
    nav: {
      services: 'Services',
      about: 'About',
      partnership: 'Partnership',
      join: 'Join',
      contact: 'Contact'
    },
    hero: {
      headline: 'From Strategy — to Delivery.',
      quote: '"Every obstacle is an opportunity to learn, grow, and excel."',
      attribution: 'Katja Kraus, Founder'
    },
    about: {
      label: 'About',
      heading: 'Katja Kraus',
      bio: 'Katja Kraus founded Aodigy after building her career across SAP consulting, project management, and HR leadership. She holds a degree in Political Science and an MSc in Business Informatics from the University of Mannheim. Her approach combines technical depth with a genuine focus on people — because the best transformations succeed not just technically, but because teams are brought along, not left behind.'
    },
    services: {
      label: 'Services',
      items: [
        { num: '01', title: 'Fit-Gap Analysis', desc: 'Deep strategic audit: where you are, where you need to be, and what bridges the gap.' },
        { num: '02', title: 'Implementation Project', desc: 'End-to-end program delivery: scope, design, build, test, and go-live readiness.' },
        { num: '03', title: 'Roll-Out & Change Management', desc: 'Organizational adoption: training, communication, and sustained performance.' },
        { num: '04', title: 'Solution Support', desc: 'Post-go-live partnership: optimization, troubleshooting, and continuous improvement.' }
      ]
    },
    partnership: {
      label: 'Exclusive Partner',
      heading: 'Virtualbadge.io',
      quote: '"Aodigy brings years of expertise in managing IT projects, ensuring our customers maximize the value of Virtualbadge within their organizations. We are proud of our partnership and look forward to many more successful projects together."',
      attribution: 'Malte Zander, Founder & CEO',
      company: 'Virtualbadge.io'
    },
    cta: {
      heading: 'Ready to Transform?',
      sub: 'Let\'s talk about what\'s possible.'
    },
    careers: {
      label: 'Careers',
      heading: 'We\'re growing. Are you a project manager or consultant looking for your next challenge?',
      cta: 'Send your application →'
    },
    footer: {
      imprint: 'Imprint',
      privacy: 'Privacy Policy',
      linkedin: 'LinkedIn'
    }
  },
  de: {
    nav: {
      services: 'Leistungen',
      about: 'Über uns',
      partnership: 'Partnerschaft',
      join: 'Mitmachen',
      contact: 'Kontakt'
    },
    hero: {
      headline: 'Von der Strategie — zur Umsetzung.',
      quote: '„Jedes Hindernis ist eine Chance zu lernen, zu wachsen und sich weiterzuentwickeln."',
      attribution: 'Katja Kraus, Gründerin'
    },
    about: {
      label: 'Über uns',
      heading: 'Katja Kraus',
      bio: 'Katja Kraus gründete Aodigy nach einer Karriere in der SAP-Beratung, im Projektmanagement und in der HR-Führung. Sie hat einen Abschluss in Politikwissenschaft sowie einen MSc in Wirtschaftsinformatik von der Universität Mannheim. Ihr Ansatz verbindet technische Tiefe mit einem echten Fokus auf Menschen — denn die besten Transformationen gelingen nicht nur technisch, sondern weil Teams mitgenommen werden.'
    },
    services: {
      label: 'Leistungen',
      items: [
        { num: '01', title: 'Fit-Gap-Analyse', desc: 'Strategische Bestandsaufnahme: wo Sie stehen, wo Sie hinwollen und was den Unterschied macht.' },
        { num: '02', title: 'Implementierungsprojekt', desc: 'Ganzheitliche Projektabwicklung: Konzept, Design, Umsetzung, Test und Go-Live.' },
        { num: '03', title: 'Roll-Out & Change Management', desc: 'Organisatorische Einführung: Training, Kommunikation und nachhaltige Performance.' },
        { num: '04', title: 'Solution Support', desc: 'Partnerschaft nach dem Go-Live: Optimierung, Fehlerbehebung und kontinuierliche Verbesserung.' }
      ]
    },
    partnership: {
      label: 'Exklusiver Partner',
      heading: 'Virtualbadge.io',
      quote: '„Aodigy bringt jahrelange Expertise im IT-Projektmanagement mit und stellt sicher, dass unsere Kunden den maximalen Nutzen aus Virtualbadge ziehen. Wir sind stolz auf unsere Partnerschaft und freuen uns auf viele weitere erfolgreiche Projekte."',
      attribution: 'Malte Zander, Gründer & CEO',
      company: 'Virtualbadge.io'
    },
    cta: {
      heading: 'Bereit für den nächsten Schritt?',
      sub: 'Lassen Sie uns über Möglichkeiten sprechen.'
    },
    careers: {
      label: 'Karriere',
      heading: 'Wir wachsen. Sind Sie ein Projektmanager oder Berater auf der Suche nach Ihrer nächsten Herausforderung?',
      cta: 'Bewerbung senden →'
    },
    footer: {
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      linkedin: 'LinkedIn'
    }
  }
};

// Legacy exports for backward compatibility
export const BRAND_NAME = "Aodigy";

export const NAV_LINKS = [
  { label: content.en.nav.services, href: "#services" },
  { label: content.en.nav.about, href: "#about" },
  { label: content.en.nav.partnership, href: "#partnership" },
  { label: content.en.nav.join, href: "#recruitment" },
  { label: content.en.nav.contact, href: "#contact" },
];

export const NAV_LINKS_DE = [
  { label: content.de.nav.services, href: "#services" },
  { label: content.de.nav.about, href: "#about" },
  { label: content.de.nav.partnership, href: "#partnership" },
  { label: content.de.nav.join, href: "#recruitment" },
  { label: content.de.nav.contact, href: "#contact" },
];
