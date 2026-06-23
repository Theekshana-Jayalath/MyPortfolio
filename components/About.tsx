"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaMedium, FaCode, FaRocket, FaLaptopCode, FaPalette, FaPuzzlePiece, FaMobileAlt, FaTrophy } from "react-icons/fa";

export default function About() {
  const focusAreas = [
    {
      title: "Full Stack Web Development",
      icon: FaLaptopCode,
      colorClass: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
    {
      title: "Modern UI/UX Design",
      icon: FaPalette,
      colorClass: "text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20",
    },
    {
      title: "Performance & Optimization",
      icon: FaRocket,
      colorClass: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      title: "Problem Solving",
      icon: FaPuzzlePiece,
      colorClass: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    },
    {
      title: "Responsive Web Applications",
      icon: FaMobileAlt,
      colorClass: "text-teal-400 bg-teal-500/10 border-teal-500/20",
    },
    {
      title: "Clean & Maintainable Code",
      icon: FaCode,
      colorClass: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
  ];

  const activities = [
    {
      title: "Sports",
      points: [
        {
          title: "Athletics",
          subpoints: [
            "Provincial-level 100m hurdles competitor",
            "Zonal-level triple jump & long jump competitor"
          ]
        },
        {
          title: "Volleyball",
          subpoints: [
            "Captain - B/Bandarawela Central College (2016)"
          ]
        }
      ],
      icon: FaTrophy,
      colorClass: "text-pink-400 bg-pink-500/10 border-pink-500/20",
      glowClass: "hover:border-pink-500/30 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]",
    },
    {
      title: "Blogging",
      description: "Active blogger sharing technical and personal insights on Medium.",
      icon: FaMedium,
      colorClass: "text-teal-400 bg-teal-500/10 border-teal-500/20",
      glowClass: "hover:border-teal-500/30 hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]",
      link: "https://medium.com/@theekshanapabodi2001",
      linkText: "To read more, follow me on Medium",
    },
    {
      title: "Dancing",
      points: [
        "Skilled traditional dancer",
        "Achievements and awards at the All Island level"
      ],
      icon: FaAward,
      colorClass: "text-rose-400 bg-rose-500/10 border-rose-500/20",
      glowClass: "hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]",
    },
  ];

  return (
    <section
      id="About"
      className="relative py-24 sm:py-32 scroll-mt-20 overflow-hidden"
    >
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-pink-900/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      {/* Decorative subtle grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.01)_0%,transparent_80%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-pink-400 font-bold mb-3"
          >
            Behind the code
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-4"
          />
        </div>

        {/* Intro Grid with Core Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* LEFT: Headline & Core Focus Badges */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight" style={{ fontFamily: "var(--font-outfit)" }}>
                Creating clean, <br />
                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                  highly-interactive
                </span> <br />
                web solutions.
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-6" />
            </div>

            {/* Core Focus Badges */}
            <div className="pt-6 space-y-4 border-t border-white/5">
              <h4 className="text-xs uppercase font-bold tracking-widest text-gray-500">
                Core Focus
              </h4>
              <div className="flex flex-wrap gap-3">
                {focusAreas.map((area) => {
                  const Icon = area.icon;
                  return (
                    <div
                      key={area.title}
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 text-white text-sm font-semibold tracking-wide hover:bg-white/10 transition-all duration-300 select-none"
                    >
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center border border-white/5 ${area.colorClass}`}>
                        <Icon className="text-xs" />
                      </div>
                      <span style={{ fontFamily: "var(--font-outfit)" }}>{area.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Bio Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 space-y-6 text-gray-300 font-light leading-relaxed text-base sm:text-lg lg:pt-4"
          >
            <p>
              I’m a passionate Software Engineer and Full Stack Web Developer who loves building clean, simple, and interactive web applications. I enjoy turning ideas into real, useful digital experiences that people can actually enjoy using.
            </p>
            <p className="text-gray-400 text-sm sm:text-base">
              I’m always curious about new technologies and love learning while improving my skills step by step. I like solving problems, writing neat and organized code, and creating smooth, user-friendly designs that feel both modern and friendly.
            </p>
          </motion.div>
        </div>

        {/* Interests & Activities Section */}
        <div className="mt-20">
          <div className="flex flex-col items-center lg:items-start mb-8">
            <h4 className="text-lg font-bold text-white tracking-wide" style={{ fontFamily: "var(--font-outfit)" }}>
              Interests & Activities
            </h4>
            <div className="h-0.5 w-12 bg-pink-500 rounded-full mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((act, idx) => {
              const Icon = act.icon;
              return (
                <motion.div
                  key={act.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.6 }}
                  whileHover={{ y: -6 }}
                  className={`group p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md transition-all duration-300 flex flex-col justify-between min-h-[220px] ${act.glowClass}`}
                >
                  <div>
                    {/* Icon Container */}
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border border-white/5 transition-all duration-300 group-hover:scale-105 mb-6 ${act.colorClass}`}>
                      <Icon className="text-xl animate-pulse" />
                    </div>

                    {/* Title & Description/Points */}
                    <h4 className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors duration-300" style={{ fontFamily: "var(--font-outfit)" }}>
                      {act.title}
                    </h4>
                    {'description' in act && act.description && (
                      <p className="text-sm text-gray-400 mt-2 font-light leading-relaxed">
                        {act.description}
                      </p>
                    )}
                    {'points' in act && act.points && (
                      <ul className="text-sm text-gray-400 mt-3 font-light space-y-2 list-disc pl-4 leading-relaxed">
                        {act.points.map((point, pIdx) => {
                          if (typeof point === "object" && point !== null && "title" in point && "subpoints" in point) {
                            return (
                              <li key={pIdx} className="transition-colors duration-200">
                                <strong className="text-white font-semibold">{point.title as string}</strong>
                                <ul className="text-xs text-gray-400 mt-1.5 space-y-1 list-[circle] pl-4 leading-relaxed">
                                  {(point.subpoints as string[]).map((sub, sIdx) => (
                                    <li key={sIdx} className="hover:text-white transition-colors">
                                      {sub}
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            );
                          }
                          return (
                            <li key={pIdx} className="hover:text-white transition-colors duration-200">
                              {point as string}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>

                  {/* Optional Link */}
                  {act.link && act.linkText && (
                    <div className="pt-4 mt-4 border-t border-white/5">
                      <a
                        href={act.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-pink-400 hover:text-pink-300 font-bold transition-colors duration-200"
                      >
                        {act.linkText}
                        <span className="group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                      </a>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
