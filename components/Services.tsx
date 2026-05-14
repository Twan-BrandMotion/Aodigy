import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export function Services() {
  const { language } = useLanguage();
  const servicesContent = content[language].services;

  return (
    <section className="section animate-in" id="services" data-reveal>
      <div className="container">
        <div style={{ gridColumn: "1 / -1" }}>
          {/* Services Grid */}
          {servicesContent.items.map((service) => (
            <div key={service.num} className="service-row">
              {/* Number */}
              <div className="label" style={{ color: "var(--accent)" }}>
                {service.num}
              </div>

              {/* Title */}
              <div
                className="service-title label"
                style={{
                  color: "var(--ink)",
                  textAlign: "center",
                  textTransform: "none",
                  letterSpacing: "0",
                  fontWeight: "400",
                  fontSize: "16px",
                }}
              >
                {service.title}
              </div>

              {/* Description */}
              <div
                className="body"
                style={{
                  color: "var(--ink)",
                  fontSize: "13px",
                  lineHeight: "1.5",
                  textAlign: "right",
                }}
              >
                {service.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
