"use client";

import logos from "./ClientLogos";

export default function Clients() {
  const topRow = ["Stripe", "Vercel", "Linear", "Notion"];
  const bottomRow = ["Figma", "Resend", "Raycast", "Arc"];

  return (
    <section
      id="clients"
      className="w-full flex items-center justify-center"
      style={{ minHeight: "150vh" }}
    >
      <div className="container max-w-[1440px] w-full">
        <div className="flex flex-col lg:flex-row items-start gap-0 w-full">
          {/* Left — Copy (sticky) */}
          <div
            className="flex flex-col gap-[40px] lg:sticky lg:top-[140px] lg:self-start"
            style={{ width: "50%" }}
          >
            <div className="section-label">CLIENTS</div>

            <h2
              className="font-serif leading-[1.0] max-w-[500px]"
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                color: "var(--text-primary)",
              }}
            >
              <em className="font-serif italic">Trusted</em> by teams building
              the future.
            </h2>

            <a href="#contact" className="btn-primary">
              Get Started
              <ArrowIcon />
            </a>
          </div>

          {/* Right — Description + Logo Grid */}
          <div
            className="flex flex-col gap-[60px]"
            style={{ width: "50%" }}
          >
            <p
              className="leading-[1.5]"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "16px",
                fontWeight: 300,
                color: "var(--text-secondary)",
              }}
            >
              We partner with startups, scale-ups, and teams that move fast.
              Whether you&rsquo;re launching your first product or your fiftieth
              campaign, our clients trust us to turn briefs into pages that
              actually perform.
            </p>

            {/* Logo Grid */}
            <div className="flex flex-col gap-[32px]">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-[16px]">
                {topRow.map((name) => (
                  <div key={name} className="client-card">
                    <div
                      className="client-logo"
                      style={{ width: "120px", height: "40px", color: "#fff" }}
                    >
                      {logos[name]}
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-[16px]">
                {bottomRow.map((name) => (
                  <div key={name} className="client-card">
                    <div
                      className="client-logo"
                      style={{ width: "120px", height: "40px", color: "#fff" }}
                    >
                      {logos[name]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="arrow-icon"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M4 10H16M16 10L11 5M16 10L11 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
