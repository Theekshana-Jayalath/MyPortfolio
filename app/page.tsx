"use client";
import React, { useState, useEffect } from "react";
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

// Mouse spotlight glow overlay
function MouseSpotlight() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
      setOpacity(1);
    };
    const handleMouseLeave = () => {
      setOpacity(0);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-500"
      style={{
        background: `radial-gradient(800px at ${coords.x}px ${coords.y}px, rgba(139, 0, 93, 0.08), rgba(106, 13, 173, 0.08), transparent 80%)`,
        opacity,
      }}
    />
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("Home");

  // Track active section on scroll
  useEffect(() => {
    const ids = ["Home", "About", "Skills", "Education", "Experience", "Projects", "Certificates", "Contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const navOffset = 140; // offset value for sticky nav highlight triggering
    const updateActive = () => {
      const scrollPos = window.scrollY + navOffset;

      if (window.scrollY < 120) {
        setActiveSection("Home");
        return;
      }

      let current = "Home";
      for (const el of sections) {
        const top = el.offsetTop;
        if (scrollPos >= top) current = el.id;
      }
      setActiveSection(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
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

