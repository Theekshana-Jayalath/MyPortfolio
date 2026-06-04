"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

interface NavigationProps {
  activeSection: string;
  mobileNavOpen: boolean;
  setMobileNavOpen: (open: boolean) => void;
}

export default function Navigation({
  activeSection,
  mobileNavOpen,
  setMobileNavOpen,
}: NavigationProps) {
  const navItems = [
    { href: "#About", label: "About" },
    { href: "#Projects", label: "Projects" },
    { href: "#Certificates", label: "Certificates" },
    { href: "#Contact", label: "Contact" },
  ];

  const isActive = (section: string) => activeSection === section;

  return (
    <>
      {/* Mobile hamburger (phones only) */}
      <button
        type="button"
        aria-label="Open navigation"
        onClick={() => setMobileNavOpen(true)}
        className="fixed top-4 left-4 md:hidden z-50 rounded-lg border border-white/20 bg-black/30 backdrop-blur-md p-2 text-white/80"
      >
        <FiMenu className="text-2xl" />
      </button>

      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-40 py-5 hidden md:block">
        <ul
          className="flex items-center gap-10 text-sm md:text-base
                     px-6 py-2 rounded-full
                     border border-white/20
                     bg-black/20 backdrop-blur-md"
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={
                  isActive(item.label)
                    ? "text-pink-400 font-semibold"
                    : "text-white/70 hover:text-pink-400"
                }
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Drawer */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileNavOpen(false)}
          />
          <motion.aside
            className="absolute top-0 left-0 h-full w-72 max-w-[80%] bg-[#0b1020]/95 backdrop-blur-md border-r border-white/10 p-6 text-white"
            initial={{ x: -320, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 24 }}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-lg font-semibold">Menu</span>
              <button
                type="button"
                aria-label="Close navigation"
                onClick={() => setMobileNavOpen(false)}
                className="rounded-md p-2 border border-white/10 hover:bg-white/5"
              >
                <IoClose className="text-2xl" />
              </button>
            </div>
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMobileNavOpen(false)}
                    className={
                      isActive(item.label)
                        ? "text-pink-400 font-semibold"
                        : "text-white/90 hover:text-pink-400"
                    }
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>
      )}
    </>
  );
}
