"use client";
import React, { useState, useEffect, useRef } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";
import BackgroundParticles from "../components/BackgroundParticles";

// Mouse spotlight glow overlay (Optimized: Updates style variables directly to bypass React renders)
function MouseSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    const handleMouseMove = (e: MouseEvent) => {
      spotlight.style.setProperty("--mouse-x", `${e.clientX}px`);
      spotlight.style.setProperty("--mouse-y", `${e.clientY}px`);
      spotlight.style.opacity = "1";
    };
    const handleMouseLeave = () => {
      spotlight.style.opacity = "0";
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-500"
      style={{
        background: `radial-gradient(800px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(139, 0, 93, 0.08), rgba(106, 13, 173, 0.08), transparent 80%)`,
        opacity: 0,
      }}
    />
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("Home");

  // Track active section using IntersectionObserver (Optimized: Avoids scroll listeners & layout thrashing offsetTop reads)
  useEffect(() => {
    const ids = ["Home", "About", "Skills", "Education", "Experience", "Projects", "Certificates", "Contact"];
    
    // We adjust rootMargin to target the upper-middle portion of the screen (active zone)
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -55% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-navy text-white overflow-hidden selection:bg-pink-500/30 selection:text-white">
      {/* Background Interactive Particles */}
      <BackgroundParticles />

      {/* Interactive Mouse Glow overlay */}
      <MouseSpotlight />

      {/* Sticky glass-capsule navigation */}
      <Navigation activeSection={activeSection} />

      {/* Page Sections */}
      <main className="relative z-20">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll back to top */}
      <GoToTop show={activeSection !== "Home"} />
    </div>
  );
}

