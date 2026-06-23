"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaAward, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string; // path to image
}

export default function Certificates() {
  const certificatesData: Certificate[] = [
    {
      title: "Intro to Machine Learning",
      issuer: "Kaggle",
      date: "January 2025",
      image: "/assests/c1.jpg",
    },
    {
      title: "Python for Beginners",
      issuer: "CODL, University of Moratuwa",
      date: "November 2025",
      image: "/assests/c2.png",
    },
    {
      title: "Git & GitHub 101",
      issuer: "SESC, SLIIT",
      date: "February 2026",
      image: "/assests/c3.png",
    },
    {
      title: "Introduction to Microservices & FractalX Framework",
      issuer: "FractalX Community × SESC at SLIIT",
      date: "April 2026",
      image: "/assests/c4.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? certificatesData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === certificatesData.length - 1 ? 0 : prev + 1));
  };

  const openPreview = (cert: Certificate) => {
    setSelectedCert(cert);
    setModalOpen(true);
  };

  return (
    <section id="Certificates" className="relative py-24 sm:py-32 scroll-mt-20 overflow-hidden">
      {/* Background radial overlays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h4 className="text-xs uppercase tracking-widest text-pink-400 font-semibold mb-2">
            Achievements & Credentials
          </h4>
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
            Certificates
          </h2>
          <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-4 w-20" />
        </div>

        {/* Certificate Coverflow Gallery */}
        <div className="relative flex flex-col items-center select-none">

          {/* Main Card Slider Container */}
          <div className="relative w-full max-w-4xl h-96 sm:h-[450px] flex items-center justify-center">

            {/* Cards wrapper */}
            <div className="relative w-full h-full flex items-center justify-center">
              {certificatesData.map((cert, index) => {
                // Calculate position relative to active index
                const offset = index - activeIndex;
                const absOffset = Math.abs(offset);

                // Only show active and adjacent cards
                if (absOffset > 2 && absOffset !== certificatesData.length - 1) return null;

                // Adjust positioning for circular loop
                let positionX = offset * 260; // offset spacing in px
                let scale = 1 - absOffset * 0.15;
                let rotateY = offset * -25;
                let zIndex = 10 - absOffset;
                let opacity = 1 - absOffset * 0.4;

                // Handle circular edge cases for smooth rotation loop
                if (offset === -(certificatesData.length - 1)) {
                  positionX = 260;
                  scale = 1 - 0.15;
                  rotateY = -25;
                  zIndex = 9;
                  opacity = 0.6;
                } else if (offset === certificatesData.length - 1) {
                  positionX = -260;
                  scale = 1 - 0.15;
                  rotateY = 25;
                  zIndex = 9;
                  opacity = 0.6;
                }

                const isActive = index === activeIndex;

                return (
                  <motion.div
                    key={cert.title}
                    onClick={() => {
                      if (isActive) {
                        openPreview(cert);
                      } else {
                        setActiveIndex(index);
                      }
                    }}
                    style={{
                      transform: `translateX(${positionX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                      transformStyle: "preserve-3d",
                      zIndex,
                    }}
                    animate={{
                      opacity,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className={`absolute w-72 h-48 sm:w-96 sm:h-64 rounded-2xl border overflow-hidden cursor-pointer flex flex-col justify-between p-5 transition-all duration-500 bg-[#070C2E] ${isActive
                        ? "border-pink-500/45 shadow-[0_15px_40px_rgba(139,0,93,0.3)] bg-gradient-to-b from-[#0A113C] to-[#2A0055]/50"
                        : "border-white/10 hover:border-white/20 hover:bg-[#0A113C]/80"
                      }`}
                  >
                    {/* Glowing highlight in background */}
                    <div className="absolute inset-0 bg-radial-gradient(circle at center, rgba(139,0,93,0.1), transparent 70%) pointer-events-none" />

                    {/* Card Header */}
                    <div className="flex justify-between items-start z-10">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-pink-400">
                        <FaAward className="text-xl" />
                      </div>
                      <span className="text-xs font-semibold text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                        {cert.date}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-1.5 z-10">
                      <h3 className={`font-bold leading-tight ${isActive ? "text-lg text-white" : "text-sm text-gray-300"}`}>
                        {cert.title}
                      </h3>
                      <p className="text-xs text-purple-300 font-semibold tracking-wide">
                        {cert.issuer}
                      </p>
                    </div>

                    {/* Bottom details / Action button */}
                    <div className="z-10 pt-2 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold text-gray-500">Credential</span>
                      {isActive && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            openPreview(cert);
                          }}
                          className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-[10px] font-bold tracking-wider text-white shadow-md shadow-pink-950/40 hover:opacity-95 cursor-pointer"
                        >
                          View Certificate
                        </motion.button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* Controls */}
          <div className="flex items-center gap-6 mt-4">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-all duration-300 hover:border-pink-500/30 active:scale-95 cursor-pointer"
              aria-label="Previous Certificate"
            >
              <FaChevronLeft className="text-sm" />
            </button>

            {/* Indicator dots */}
            <div className="flex gap-2">
              {certificatesData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${idx === activeIndex ? "w-8 bg-pink-500" : "w-2.5 bg-white/20 hover:bg-white/40"
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-all duration-300 hover:border-pink-500/30 active:scale-95 cursor-pointer"
              aria-label="Next Certificate"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </div>

        </div>
      </div>

      {/* Fullscreen Certificate Lightbox Modal */}
      <AnimatePresence>
        {modalOpen && selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Blurred dark overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="relative w-full max-w-3xl glass-panel border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col"
            >
              {/* Header */}
              <div className="p-5 border-b border-white/10 flex items-center justify-between bg-black/20">
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs text-pink-400 font-semibold mt-0.5">
                    {selectedCert.issuer} • {selectedCert.date}
                  </p>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close Preview"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Certificate Image Frame */}
              <div className="relative p-6 bg-black/40 flex items-center justify-center min-h-[300px] sm:min-h-[400px]">
                <div className="relative w-full max-w-2xl aspect-4/3 rounded-xl overflow-hidden border border-white/10 shadow-lg bg-white/5">
                  <Image
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
