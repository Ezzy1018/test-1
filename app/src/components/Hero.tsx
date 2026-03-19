"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full flex flex-col items-center justify-center"
      style={{ height: "150dvh" }}
    >
      {/* Scroll indicator */}
      <div
        className="absolute bottom-[40px] left-[40px] lg:left-[40px] flex items-center gap-[6px]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <span className="text-[16px]" style={{ color: "rgba(255,255,255,0.2)" }}>
          /
        </span>
        <span className="text-[16px]" style={{ color: "var(--text-primary)" }}>
          Scroll down
        </span>
      </div>

      {/* Main content — centered vertically in first viewport */}
      <div
        className="w-full max-w-[1440px] px-5 lg:px-10 flex flex-col items-center relative"
        style={{ top: "120px" }}
      >
        {/* Headline */}
        <h1
          className="font-serif text-center leading-[1.0] tracking-[-0.04em] max-w-[45em]"
          style={{
            fontSize: "clamp(3rem, 8vw, 5rem)",
            color: "var(--text-primary)",
          }}
        >
          Your product deserves a landing page that{" "}
          <em className="font-serif italic">actually ships.</em>
        </h1>

        {/* CTA Buttons */}
        <div className="flex items-start gap-[8px] mt-[40px]">
          <a href="#contact" className="btn-primary">
            Start a Project
            <ArrowIcon />
          </a>
          <a href="#about" className="btn-ghost">
            See Our Work
          </a>
        </div>
      </div>

      {/* Subtitle — right side */}
      <div
        className="absolute bottom-[40px] right-0 max-w-[33%] hidden lg:flex flex-col gap-[40px] px-10"
      >
        <p
          className="leading-[1.15]"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "24px",
            fontWeight: 300,
            color: "var(--text-secondary)",
          }}
        >
          We understand your vision, then AI goes to work. Go-to-market landing
          pages built for startups that need to ship — fast, polished, and
          conversion-ready.
        </p>
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
