"use client";

import { useState } from "react";
import BookingModal from "./BookingModal";

export default function CTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section
        id="contact"
        className="w-full flex items-center justify-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="container max-w-[1440px] w-full flex flex-col items-center gap-[24px]">
          <h2
            className="font-serif text-center leading-[1.0] max-w-[40em]"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "var(--text-primary)",
            }}
          >
            Ready to ship your next{" "}
            <em className="font-serif italic">landing page?</em>
          </h2>

          <p
            className="text-center leading-[1.5] max-w-[500px]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
              fontWeight: 300,
              color: "var(--text-secondary)",
            }}
          >
            Book a 15-minute call. No decks, no fluff — just tell us what
            you&rsquo;re building and we&rsquo;ll tell you how we&rsquo;d build
            it.
          </p>

          <div className="flex items-center gap-[16px] mt-[8px]">
            <button
              onClick={() => setModalOpen(true)}
              className="btn-primary"
            >
              Book a Call
              <ArrowIcon />
            </button>
            <a href="mailto:hello@studio.design" className="btn-ghost">
              Email Us
            </a>
          </div>

          {/* Trust line */}
          <p
            className="text-center mt-[16px]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "13px",
              color: "var(--text-tertiary)",
            }}
          >
            Typically respond within 24 hours &middot; No commitment required
          </p>
        </div>
      </section>

      <BookingModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
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
