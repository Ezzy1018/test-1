"use client";

export default function Services() {
  const services = [
    {
      number: "01",
      title: "Landing Pages",
      description:
        "Single-page experiences designed to convert. Every pixel serves a purpose — your CTA, your story, your product. Delivered in 48 hours.",
    },
    {
      number: "02",
      title: "Go-To-Market Sites",
      description:
        "Multi-page sites that tell your full story. Product pages, pricing, about, blog — everything a startup needs to look established on day one.",
    },
    {
      number: "03",
      title: "Interactive Experiences",
      description:
        "3D, animation, scroll-driven storytelling. When your product is the experience, we build pages that feel like using the product itself.",
    },
    {
      number: "04",
      title: "Design Systems",
      description:
        "Reusable component libraries and brand guidelines. We don't just build your page — we give you the foundation to scale your visual identity.",
    },
  ];

  return (
    <section
      id="services"
      className="w-full flex items-center justify-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="container max-w-[1440px] w-full flex flex-col items-start gap-[60px]">
        {/* Header */}
        <div className="section-label">WHAT WE DO</div>

        {/* Service rows */}
        <div className="flex flex-col w-full">
          {services.map((service, i) => (
            <div
              key={service.number}
              className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-[60px] py-[40px]"
              style={{
                borderBottom:
                  i < services.length - 1
                    ? "1px solid rgba(255,255,255,0.1)"
                    : "none",
              }}
            >
              <span
                className="font-mono text-[14px] shrink-0"
                style={{ color: "var(--text-tertiary)", width: "40px" }}
              >
                {service.number}
              </span>
              <h3
                className="font-serif shrink-0"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                  color: "var(--text-primary)",
                  width: "280px",
                }}
              >
                {service.title}
              </h3>
              <p
                className="leading-[1.5]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "16px",
                  fontWeight: 300,
                  color: "var(--text-secondary)",
                  maxWidth: "500px",
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
