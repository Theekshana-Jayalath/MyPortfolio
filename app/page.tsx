"use client";
import React from "react";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";

export default function Home() {
  const [activeSection, setActiveSection] = React.useState<string>("None");
  const [homeAnimKey, setHomeAnimKey] = React.useState<number>(0);
  const [contactAnimKey, setContactAnimKey] = React.useState<number>(0);
  const [mobileNavOpen, setMobileNavOpen] = React.useState<boolean>(false);

  // Listen to scroll to track active section
  React.useEffect(() => {
    const ids = ["About", "Projects", "Certificates", "Contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const navOffset = 80; // approximate fixed navbar height
    const updateActive = () => {
      const scrollPos = window.scrollY + navOffset + 1;
      const aboutEl = document.getElementById("About");
      if (aboutEl && scrollPos < aboutEl.offsetTop) {
        setActiveSection("None");
        return;
      }

      let current = ids[0];
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

  // Trigger animation key changes on section visibility
  React.useEffect(() => {
    const targets = ["Home", "Contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (targets.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            if (e.target.id === "Home") setHomeAnimKey((k) => k + 1);
            if (e.target.id === "Contact") setContactAnimKey((k) => k + 1);
          }
        });
      },
      { threshold: 0.5 }
    );

    targets.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div>
      <Head>
        <title>Portfolio website</title>
        <link rel="icon" href="/fav.png" />
        <meta name="description" content="My personal portfolio website" />
      </Head>

      <main className="min-h-screen overflow-x-hidden bg-linear-to-b from-[#0b1020] via-[#0e1530] to-[#0a0f25] px-4 sm:px-6 md:px-10">
        <Navigation
          activeSection={activeSection}
          mobileNavOpen={mobileNavOpen}
          setMobileNavOpen={setMobileNavOpen}
        />

        <Hero homeAnimKey={homeAnimKey} />
        <About />
        <Projects />
        <Certificates />
        <Contact contactAnimKey={contactAnimKey} />

        <Footer />
        <GoToTop show={activeSection !== "None"} />
      </main>
    </div>
  );
}
