"use client";

import { useState } from "react";

export default function BookingModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, POST to your API or use Formspree/Resend
  };

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-5"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(0,0,0,0.8)",
          backdropFilter: "blur(20px)",
        }}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-[520px] flex flex-col gap-[32px] p-[40px] rounded-[16px]"
        style={{
          background: "rgba(20,20,20,0.95)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-[16px] right-[16px] w-[32px] h-[32px] flex items-center justify-center bg-transparent border-0 cursor-pointer text-white/40 hover:text-white transition-colors"
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M4 4L12 12M12 4L4 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {!submitted ? (
          <>
            <div className="flex flex-col gap-[8px]">
              <h3
                className="font-serif leading-[1.0]"
                style={{ fontSize: "28px", color: "var(--text-primary)" }}
              >
                Start your project
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  fontWeight: 300,
                  color: "var(--text-secondary)",
                }}
              >
                Tell us about your product. We&rsquo;ll get back to you within 24 hours.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-[20px]"
            >
              <div className="flex gap-[16px]">
                <InputField
                  label="Name"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  placeholder="Jane Doe"
                  required
                />
                <InputField
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  placeholder="jane@startup.com"
                  required
                />
              </div>

              <InputField
                label="Company"
                value={form.company}
                onChange={(v) => setForm({ ...form, company: v })}
                placeholder="Acme Inc."
              />

              <div className="flex flex-col gap-[6px]">
                <label
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    color: "var(--text-tertiary)",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Budget Range
                </label>
                <div className="flex gap-[8px] flex-wrap">
                  {["$2k–$5k", "$5k–$10k", "$10k–$25k", "$25k+"].map(
                    (range) => (
                      <button
                        key={range}
                        type="button"
                        onClick={() => setForm({ ...form, budget: range })}
                        className="px-[16px] py-[10px] rounded-[8px] text-[14px] cursor-pointer transition-all duration-200 border-0"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          background:
                            form.budget === range
                              ? "rgba(255,255,255,0.15)"
                              : "rgba(255,255,255,0.05)",
                          color:
                            form.budget === range
                              ? "#fff"
                              : "var(--text-secondary)",
                          border:
                            form.budget === range
                              ? "1px solid rgba(255,255,255,0.2)"
                              : "1px solid transparent",
                        }}
                      >
                        {range}
                      </button>
                    )
                  )}
                </div>
              </div>

              <InputField
                label="What are you building?"
                value={form.message}
                onChange={(v) => setForm({ ...form, message: v })}
                placeholder="A landing page for our new AI writing tool..."
                textarea
              />

              <button type="submit" className="btn-primary w-full justify-center">
                Send Brief
                <ArrowIcon />
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center gap-[20px] py-[40px]">
            <div
              className="w-[64px] h-[64px] rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.1)" }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M7 14L12 19L21 9"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3
              className="font-serif text-center leading-[1.0]"
              style={{ fontSize: "28px", color: "var(--text-primary)" }}
            >
              Brief received.
            </h3>
            <p
              className="text-center"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "16px",
                fontWeight: 300,
                color: "var(--text-secondary)",
                maxWidth: "340px",
              }}
            >
              We&rsquo;ll review your project and reach out within 24 hours.
              Excited to build with you.
            </p>
            <button onClick={onClose} className="btn-ghost mt-[12px]">
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function InputField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  textarea = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const baseStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: "14px",
    fontWeight: 300,
    color: "var(--text-primary)",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "8px",
    padding: "12px 16px",
    outline: "none",
    width: "100%",
    resize: "none" as const,
    transition: "border-color 200ms ease",
  };

  return (
    <div className="flex flex-col gap-[6px] flex-1">
      <label
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "12px",
          color: "var(--text-tertiary)",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={3}
          style={baseStyle}
          onFocus={(e) =>
            (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")
          }
          onBlur={(e) =>
            (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")
          }
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          style={baseStyle}
          onFocus={(e) =>
            (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")
          }
          onBlur={(e) =>
            (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")
          }
        />
      )}
    </div>
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
