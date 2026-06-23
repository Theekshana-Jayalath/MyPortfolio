"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

interface NavigationProps {
  activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "Home", label: "Home" },
    { id: "About", label: "About Me" },
    { id: "Skills", label: "Skills" },
    { id: "Education", label: "Education" },
    { id: "Experience", label: "Experience" },
    { id: "Projects", label: "Projects" },
    { id: "Certificates", label: "Certificates" },
    { id: "Contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 5; // Adjusted scroll offset to reduce excessive empty top spacing
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Navbar Container */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 ${scrolled ? "bg-brand-navy/85 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#Home"
            onClick={(e) => handleClick(e, "Home")}
            className="text-xl font-bold tracking-widest bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent group"
          >
            TK
            <span className="inline-block text-pink-500 group-hover:animate-ping ml-0.5 font-extrabold">🤍</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              {navItems.map((item) => {
                const active = activeSection.toLowerCase() === item.id.toLowerCase();
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleClick(e, item.id)}
                      className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${active
                          ? "text-white"
                          : "text-white/60 hover:text-white/90"
                        }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="activeNav"
                          className="absolute inset-0 bg-gradient-to-r from-[#2A0055] to-[#8B005D]/80 rounded-full -z-10 shadow-sm border border-white/10"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-white/80 hover:text-white focus:outline-none hover:bg-white/5 border border-white/10"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay & drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Slide-out drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-brand-navy/95 border-l border-white/10 z-50 p-6 flex flex-col justify-between lg:hidden"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/15">
                  <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Navigation
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg text-white/85 hover:text-white border border-white/10 hover:bg-white/5"
                    aria-label="Close menu"
                  >
                    <FiX className="text-xl" />
                  </button>
                </div>

                {/* Nav Links */}
                <nav>
                  <ul className="flex flex-col gap-3">
                    {navItems.map((item) => {
                      const active = activeSection.toLowerCase() === item.id.toLowerCase();
                      return (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            onClick={(e) => handleClick(e, item.id)}
                            className={`flex items-center px-4 py-3 rounded-xl border transition-all duration-300 ${active
                                ? "bg-gradient-to-r from-[#2A0055] to-[#8B005D] border-white/20 text-white font-medium shadow-md shadow-purple-950/40"
                                : "bg-white/5 border-white/5 text-white/70 hover:text-white hover:bg-white/10"
                              }`}
                          >
                            {item.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>

              {/* Status info at bottom of drawer */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-green-400">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-medium">Available for work</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
