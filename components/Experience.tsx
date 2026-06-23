"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCode } from "react-icons/fa";

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      period: "June 1, 2026 - Present",
      role: "Software Engineer Intern",
      company: "Applantics(PVT)LTD",
      location: "Kurunegala, Sri Lanka",
      duration: "Present",
      icon: FaCode,
    },
    {
      period: "2022",
      role: "School Leaver Trainee",
      company: "Bank of Ceylon (BOC)",
      location: "Andaulpotha Branch, Sri Lanka",
      duration: "6 Months",
      icon: FaBriefcase,
    }
  ];

  return (
    <section id="Experience" className="relative py-24 sm:py-32 scroll-mt-20 overflow-hidden">
      {/* Visual glow overlay */}
      <div className="absolute bottom-1/3 right-1/10 w-96 h-96 bg-fuchsia-950/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <h4 className="text-xs uppercase tracking-widest text-pink-400 font-semibold mb-2">
            Career Journey
          </h4>
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-4 w-20" />
        </div>

        {/* Timeline body */}
        <div className="relative">
          {/* Vertical central line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-purple-500 via-fuchsia-500 to-transparent -translate-x-1/2 z-0" />

          {/* Timeline Entries */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = exp.icon;

              return (
                <div
                  key={exp.role}
                  className={`relative flex flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""
                    } items-start md:items-center`}
                >

                  {/* Outer circle dot on line */}
                  <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-brand-navy border-2 border-purple-500 flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_12px_rgba(106,13,173,0.5)]">
                    <div className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                  </div>

                  {/* Card Container (Left/Right) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
                      className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 relative group"
                    >
                      {/* Accent glow overlay */}
                      <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-[#2A0055] to-[#6A0DAD] opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-500 pointer-events-none" />

                      {/* Header info */}
                      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                        <div className="flex items-center gap-2">
                          <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold text-purple-400">
                            {exp.period}
                          </span>
                          <span className="inline-block px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-gray-400">
                            {exp.duration}
                          </span>
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/70">
                          <Icon className="text-sm" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-pink-400">
                        {exp.company} <span className="text-gray-500 font-light">• {exp.location}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty spacer for desktop */}
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
