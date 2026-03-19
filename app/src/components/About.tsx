"use client";

export default function About() {
  return (
    <section
      id="about"
      className="w-full flex items-center justify-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="container max-w-[1440px] w-full flex flex-col items-start justify-center gap-[40px]">
        <div className="flex flex-col gap-[40px]" style={{ width: "50%" }}>
          {/* Label */}
          <div className="section-label">
            OUR STUDIO
          </div>

          {/* Divider */}
          <div
            className="w-full h-[1px]"
            style={{ background: "var(--text-primary)", opacity: 0.2 }}
          />

          {/* Title */}
          <h2
            className="font-serif leading-[1.0]"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              color: "var(--text-primary)",
            }}
          >
            We build landing pages the way founders think — fast, clear, and
            built to convert.
          </h2>
        </div>
      </div>
    </section>
  );
}
