import { SERVICES } from "@/lib/content";

export function Services() {
  return (
    <section className="section animate-in" id="services" data-reveal>
      <div className="container">
        <div style={{ gridColumn: "1 / -1" }}>
          {/* Services Grid */}
          {SERVICES.map((service) => (
            <div key={service.number} className="service-row">
              {/* Number */}
              <div className="label" style={{ color: "var(--accent)" }}>
                {service.number}
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
                {service.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
