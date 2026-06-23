"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  badges?: string[];
}

export default function Education() {
  const educationData: TimelineItem[] = [
    {
      year: "2024 - Present",
      title: "BSc (Hons) in IT – Specialization: Software Engineering",
      institution: "SLIIT (Sri Lanka Institute of Information Technology)",
      badges: ["Undergraduate", "Software Engineering Specialization"],
    },
    {
      year: "2018 - 2021",
      title: "G.C.E. A/L (Advanced Level)",
      institution: "Bandarawela Central College",
      badges: ["Maths – C", "Chemistry – C", "Physics – S"],
    },
    {
      year: "2017",
      title: "G.C.E. O/L (Ordinary Level)",
      institution: "Bandarawela Central College",
      badges: ["9 A Passes"],
    },
    {
      year: "2007 - 2016",
      title: "Primary & Junior Secondary Education",
      institution: "B/Andaulpotha National School",
    },
  ];

  return (
    <section id="Education" className="relative py-24 sm:py-32 scroll-mt-20 overflow-hidden">
      {/* Background radial overlays */}
      <div className="absolute top-1/3 left-1/10 w-96 h-96 bg-purple-950/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <h4 className="text-xs uppercase tracking-widest text-pink-400 font-semibold mb-2">
            Academic Milestones
          </h4>
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-4 w-20" />
        </div>

        {/* Timeline body */}
        <div className="relative">
          {/* Vertical central line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-transparent -translate-x-1/2 z-0" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {educationData.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.title}
                  className={`relative flex flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""
                    } items-start md:items-center`}
                >

                  {/* Outer circle dot on line */}
                  <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-[#050B2D] border-2 border-pink-500 flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_12px_rgba(236,72,153,0.5)]">
                    <div className="w-2 h-2 rounded-full bg-pink-400 animate-ping" />
                  </div>

                  {/* Spacer or Card Container (Left side on even, Right side on odd) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
                      className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-pink-500/30 transition-all duration-300 relative group"
                    >
                      {/* Interactive hover glow */}
                      <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-500 pointer-events-none" />

                      {/* Header */}
                      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                        <span className="inline-block px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs font-bold text-pink-400">
                          {item.year}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/70">
                          <FaGraduationCap className="text-base" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-pink-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <h4 className="text-sm font-semibold text-purple-300 mb-3">
                        {item.institution}
                      </h4>

                      {/* Badges/Results */}
                      {item.badges && item.badges.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {item.badges.map((badge) => (
                            <span
                              key={badge}
                              className="px-3 py-1 rounded-full text-xs font-bold bg-white/5 border border-white/10 text-white/95"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Empty space filler for desktop alignment */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
