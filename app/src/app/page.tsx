"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import FadeInProvider from "@/components/FadeInProvider";
import { useEffect, useState } from "react";

const Scene3D = dynamic(() => import("@/components/Scene3D"), {
  ssr: false,
  loading: () => null,
});

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Hide loading screen after a short delay
    const timer = setTimeout(() => setLoaded(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <div
        id="loading-screen"
        className={!loaded ? "" : "hidden"}
      >
        <div className="flex flex-col items-center justify-center gap-[20px]">
          <span
            className="font-serif text-[32px] text-white"
            style={{ position: "relative", zIndex: 2 }}
          >
            Studio.
          </span>
          <div className="spinner-ring" />
        </div>
      </div>

      {/* 3D Background */}
      <Scene3D />

      {/* Main Content */}
      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <SmoothScroll>
          <FadeInProvider>
            <Navbar />
            <main>
              <Hero />
              <div className="fade-in">
                <About />
              </div>
              <div className="fade-in">
                <Services />
              </div>
              <div className="fade-in">
                <Clients />
              </div>
              <div className="fade-in">
                <Pricing />
              </div>
              <div className="fade-in">
                <CTA />
              </div>
            </main>
            <Footer />
          </FadeInProvider>
        </SmoothScroll>
      </div>
    </>
  );
}
