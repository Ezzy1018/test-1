"use client";

export default function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$2,400",
      tagline: "Ship in 48 hours",
      delivery: "48 hours",
      features: [
        "1 landing page",
        "Mobile-responsive design",
        "Basic SEO setup",
        "1 round of revisions",
        "Deployment support",
      ],
      cta: "Start Now",
      featured: false,
    },
    {
      name: "Growth",
      price: "$7,500",
      tagline: "The startup standard",
      delivery: "1 week",
      features: [
        "Up to 5 pages",
        "Custom animations",
        "Analytics integration",
        "3 rounds of revisions",
        "Performance optimization",
        "Copywriting assistance",
      ],
      cta: "Get Started",
      featured: true,
    },
    {
      name: "Scale",
      price: "Custom",
      tagline: "Full GTM package",
      delivery: "2–4 weeks",
      features: [
        "Full site (10+ pages)",
        "3D / interactive elements",
        "Design system & components",
        "Unlimited revisions",
        "Ongoing iteration support",
        "Dedicated AI design lead",
      ],
      cta: "Let&rsquo;s Talk",
      featured: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="w-full flex items-center justify-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="container max-w-[1440px] w-full flex flex-col items-center gap-[60px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-[20px] max-w-[600px]">
          <div className="section-label w-full justify-center">PRICING</div>
          <h2
            className="font-serif text-center leading-[1.0]"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              color: "var(--text-primary)",
            }}
          >
            Pick your pace.
          </h2>
          <p
            className="text-center leading-[1.5]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
              fontWeight: 300,
              color: "var(--text-secondary)",
            }}
          >
            Every project starts with understanding your product. The difference
            is how fast we take it from brief to live.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row gap-[24px] w-full">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`pricing-card ${tier.featured ? "featured" : ""}`}
            >
              {/* Top */}
              <div className="flex flex-col gap-[16px]">
                <span
                  className="text-[12px] tracking-[3px] uppercase"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "var(--text-secondary)",
                  }}
                >
                  {tier.delivery}
                </span>
                <h3
                  className="font-serif leading-[1.0]"
                  style={{
                    fontSize: "32px",
                    color: "var(--text-primary)",
                  }}
                >
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-[8px]">
                  <span
                    className="font-serif"
                    style={{
                      fontSize: "48px",
                      color: "var(--text-primary)",
                    }}
                  >
                    {tier.price}
                  </span>
                  {tier.price !== "Custom" && (
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "14px",
                        color: "var(--text-tertiary)",
                      }}
                    >
                      / project
                    </span>
                  )}
                </div>
                <p
                  className="leading-[1.15]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "16px",
                    fontWeight: 300,
                    color: "var(--text-secondary)",
                  }}
                >
                  {tier.tagline}
                </p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-[12px] list-none p-0 m-0">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-[12px]"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="shrink-0"
                    >
                      <path
                        d="M3 8L6.5 11.5L13 4.5"
                        stroke="rgba(255,255,255,0.4)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={tier.featured ? "btn-primary" : "btn-ghost"}
                style={{ justifyContent: "center", width: "100%" }}
                dangerouslySetInnerHTML={{ __html: tier.cta }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
