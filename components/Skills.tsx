"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode, FaServer, FaTools, FaHtml5, FaCss3Alt,
  FaReact, FaNodeJs, FaGitAlt, FaDocker, FaFigma, FaBrain,
  FaJava, FaPython, FaJs, FaBootstrap,
  FaAndroid, FaDatabase, FaLaptopCode, FaMobileAlt
} from "react-icons/fa";

interface SkillItem {
  name: string;
  icon: React.ComponentType<{ className?: string }> | null;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: SkillItem[];
}

export default function Skills() {
  const categories: SkillCategory[] = [
    {
      id: "languages_web",
      title: "Languages & Front-End",
      icon: FaCode,
      skills: [
        { name: "JavaScript", icon: FaJs },
        { name: "React", icon: FaReact },
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS / Tailwind", icon: FaCss3Alt },
        { name: "Java", icon: FaJava },
        { name: "Python", icon: FaPython },
        { name: "PHP", icon: FaCode },
        { name: "C++", icon: FaCode },
        { name: "C", icon: FaCode },
        { name: "Bootstrap", icon: FaBootstrap },
      ],
    },
    {
      id: "backend_mobile_db",
      title: "Backend, Mobile & DB",
      icon: FaServer,
      skills: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express.js", icon: FaServer },
        { name: "Kotlin", icon: FaMobileAlt },
        { name: "Android Studio", icon: FaAndroid },
        { name: "MySQL", icon: FaDatabase },
        { name: "MongoDB", icon: FaDatabase },
      ],
    },
    {
      id: "tools_arch",
      title: "Tools & Architecture",
      icon: FaTools,
      skills: [
        { name: "Git & GitHub", icon: FaGitAlt },
        { name: "Docker", icon: FaDocker },
        { name: "VS Code", icon: FaLaptopCode },
        { name: "IntelliJ IDEA", icon: FaLaptopCode },
        { name: "Figma", icon: FaFigma },
        { name: "Agile / Scrum", icon: FaBrain },
        { name: "MVC Pattern", icon: FaCode },
        { name: "Microservices", icon: FaServer },
        { name: "Eclipse", icon: FaLaptopCode },
      ],
    },
    {
      id: "soft_skills",
      title: "Soft Skills & Mindset",
      icon: FaBrain,
      skills: [
        { name: "Problem Solving", icon: FaBrain },
        { name: "Teamwork", icon: FaBrain },
        { name: "Collaboration", icon: FaBrain },
        { name: "Communication", icon: FaBrain },
        { name: "Adaptability", icon: FaBrain },
        { name: "Critical Thinking", icon: FaBrain },
        { name: "Self Learning", icon: FaBrain },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(categories[0].id);
  const activeCategory = categories.find((c) => c.id === activeTab) || categories[0];

  // Window width tracking for safe responsive radii calculations (prevents SSR hydration errors)
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth < 1024 && windowWidth >= 640;

  // Calculate relative orbit circles spacing
  const innerRad = isMobile ? 85 : isTablet ? 110 : 145;
  const outerRad = isMobile ? 155 : isTablet ? 195 : 255;

  return (
    <section id="Skills" className="relative py-24 sm:py-32 scroll-mt-20 overflow-hidden">
      {/* Dynamic glow in background */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h4 className="text-xs uppercase tracking-widest text-pink-400 font-semibold mb-2">
            My Tech Stack & Expertise
          </h4>
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-4 w-20" />
        </div>

        {/* Tab Buttons (Capsule Style) */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide border transition-all duration-300 ${isActive
                    ? "bg-gradient-to-r from-purple-600 to-[#8B005D] border-white/20 text-white shadow-lg shadow-purple-950/40"
                    : "bg-white/5 border-white/5 text-white/60 hover:text-white hover:bg-white/10"
                  }`}
              >
                <Icon className="text-base" />
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Centered Orbit Playground (No separate sidebar list) */}
        <div className="relative w-full max-w-3xl min-h-[380px] sm:min-h-[500px] md:min-h-[580px] flex items-center justify-center mx-auto p-4">

          {/* Rotating Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute w-72 h-72 sm:w-[460px] sm:h-[460px] md:w-[520px] md:h-[520px] rounded-full border border-dashed border-white/5 pointer-events-none"
          />

          {/* Inner Orbit Circle */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute w-44 h-44 sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] rounded-full border border-dashed border-pink-500/5 pointer-events-none"
          />

          {/* Central Core sphere */}
          <div className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-[#2A0055] to-[#8B005D] flex flex-col items-center justify-center p-3 border border-white/20 shadow-[0_0_50px_rgba(139,0,93,0.35)] z-20 text-center">
            <span className="text-[9px] uppercase font-bold tracking-widest text-pink-300">Category</span>
            <span className="text-xs sm:text-sm text-white font-extrabold mt-1 leading-tight max-w-[100px] sm:max-w-[120px]">
              {activeCategory.title}
            </span>
          </div>

          {/* Orbiting technology circular bubbles */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full"
            >
              {activeCategory.skills.map((skill, index, arr) => {
                // Distribute items across multiple circular radii
                // Inner layer (first 4 skills), Outer layer (the rest)
                const isOuter = index >= 4;
                const totalInLayer = isOuter ? arr.length - 4 : 4;
                const layerIdx = isOuter ? index - 4 : index;

                // Add a small rotation offset to outer layer to prevent alignment overlap
                const angle = (layerIdx / totalInLayer) * 2 * Math.PI + (isOuter ? Math.PI / 4 : 0);
                const radius = isOuter ? outerRad : innerRad;

                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={skill.name}
                    className="absolute z-10"
                    style={{
                      left: "50%",
                      top: "50%",
                    }}
                    animate={{
                      // Gentle floating motion around their circular coordinates
                      x: [x - 4, x + 4, x - 4],
                      y: [y - 4, y + 4, y - 4],
                    }}
                    transition={{
                      duration: 4 + index * 0.6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {/* The Skill Circular Bubble */}
                    <motion.div
                      style={{
                        x: "-50%",
                        y: "-50%",
                      }}
                      whileHover={{ scale: 1.15, border: "1px solid rgba(236, 72, 153, 0.45)", boxShadow: "0px 0px 15px rgba(236, 72, 153, 0.3)" }}
                      className="glass-panel w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center p-2 text-white/95 shadow-lg cursor-pointer text-center relative border border-white/10"
                    >
                      {Icon && <Icon className="text-sm sm:text-xl md:text-2xl text-pink-400 mb-1 sm:mb-1.5" />}
                      <span className="text-[8px] sm:text-[10px] md:text-xs font-bold leading-tight select-none max-w-full break-words px-0.5">
                        {skill.name}
                      </span>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
