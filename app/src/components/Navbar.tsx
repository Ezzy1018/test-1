"use client";

import { useEffect, useState } from "react";
import BookingModal from "./BookingModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Clients", href: "#clients" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-[99999] transition-all duration-300"
        style={{ paddingTop: scrolled ? "10px" : "20px" }}
      >
        <div className="container mx-auto max-w-[1440px] px-5 lg:px-10">
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-[10px] no-underline">
              <div className="w-[40px] h-[40px] rounded-full border border-white/20 flex items-center justify-center">
                <span className="font-serif text-[18px] text-white italic">S</span>
              </div>
              <span className="font-serif text-[32px] text-white leading-none">
                Studio.
              </span>
            </a>

            {/* Pill Nav */}
            <div
              className="flex items-center h-[60px] px-[30px] rounded-full gap-[30px]"
              style={{
                background: "rgba(20, 20, 20, 0.2)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white text-[16px] no-underline transition-colors duration-200 hover:text-[#cfcfcf]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => setModalOpen(true)}
              className="btn-primary"
            >
              Start a Project
              <ArrowIcon />
            </button>
          </div>

          {/* Mobile Nav */}
          <div className="flex lg:hidden items-center justify-between h-[56px]">
            <a href="#" className="flex items-center gap-[8px] no-underline">
              <div className="w-[32px] h-[32px] rounded-full border border-white/20 flex items-center justify-center">
                <span className="font-serif text-[14px] text-white italic">S</span>
              </div>
              <span className="font-serif text-[28px] text-white leading-none">
                Studio.
              </span>
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-[32px] h-[32px] flex flex-col items-center justify-center gap-[6px] bg-transparent border-0 cursor-pointer"
              aria-label="Toggle menu"
            >
              <span
                className="block w-[20px] h-[2px] bg-white transition-transform duration-300"
                style={{
                  transform: menuOpen
                    ? "rotate(45deg) translateY(4px)"
                    : "none",
                }}
              />
              <span
                className="block w-[20px] h-[2px] bg-white transition-transform duration-300"
                style={{
                  transform: menuOpen
                    ? "rotate(-45deg) translateY(-4px)"
                    : "none",
                }}
              />
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {menuOpen && (
            <div
              className="lg:hidden fixed inset-0 z-[99998] flex flex-col items-start px-[20px] pt-[80px] pb-[40px] gap-[32px]"
              style={{
                background: "rgba(20, 20, 20, 0.95)",
                backdropFilter: "blur(20px)",
              }}
            >
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-[24px] no-underline"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setModalOpen(true);
                }}
                className="btn-primary mt-4"
              >
                Start a Project
                <ArrowIcon />
              </button>
            </div>
          )}
        </div>
      </nav>

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
      xmlns="http://www.w3.org/2000/svg"
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
