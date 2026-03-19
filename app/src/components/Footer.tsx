"use client";

import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const emailRef = useRef<HTMLButtonElement>(null);
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("hello@studio.design");
      setCopied(true);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 1400);
    } catch {
      // fallback
      const ta = document.createElement("textarea");
      ta.value = "hello@studio.design";
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.top = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 1400);
    }
  };

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <footer className="w-full flex flex-col">
      {/* CTA Panel */}
      <div
        className="w-full flex justify-center"
        style={{
          background: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="container max-w-[1440px] w-full flex flex-col lg:flex-row items-start lg:items-start justify-between py-[80px] px-5 lg:px-10 gap-[60px]">
          {/* Left — Brand + Email */}
          <div className="flex flex-col gap-[40px]">
            <div className="flex items-center gap-[10px]">
              <div className="w-[40px] h-[40px] rounded-full border border-white/20 flex items-center justify-center">
                <span className="font-serif text-[18px] text-white">S</span>
              </div>
              <span className="font-serif text-[32px] text-white leading-none">
                Studio.
              </span>
            </div>

            <div className="flex flex-col gap-[8px]" style={{ maxWidth: "300px" }}>
              <h3
                className="font-serif leading-[1.0]"
                style={{
                  fontSize: "32px",
                  color: "var(--text-primary)",
                }}
              >
                Speak to your new design team today.
              </h3>
            </div>

            {/* Copy-to-clipboard email */}
            <button
              ref={emailRef}
              className="copy-email"
              onClick={handleCopy}
              data-copied={copied ? "true" : undefined}
            >
              <span className="copy-email__text">hello@studio.design</span>
              <span
                className="copy-email__tooltip"
                role="status"
                aria-live="polite"
              >
                Copied
              </span>
              <span className="copy-email__underline" aria-hidden="true" />
            </button>
          </div>

          {/* Right — Links */}
          <div className="flex gap-[80px]">
            <div className="flex flex-col gap-[40px]">
              <p
                className="text-[16px]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  color: "var(--text-primary)",
                }}
              >
                Discover
              </p>
              <div className="flex flex-col gap-[16px]">
                {["About", "Services", "Pricing"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-[14px] no-underline transition-colors duration-200"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.4)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.8)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.4)")
                    }
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Base */}
      <div className="w-full flex justify-center py-[40px] px-5 lg:px-10">
        <div className="container max-w-[1440px] w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[20px]">
          <p
            className="text-[14px]"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            &copy; 2026 Studio. All rights reserved.
          </p>
          <p
            className="text-[14px]"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            hello@studio.design
          </p>
        </div>
      </div>
    </footer>
  );
}
