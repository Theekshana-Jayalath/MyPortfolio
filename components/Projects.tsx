"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Project {
  title: string;
  subtitle: string;
  category: "mern" | "mobile" | "web";
  technologies: string[];
  description: string;
  image?: string;
  github: string;
  demo?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "NourishNet",
      subtitle: "Zero Hunger Management System (MVC)",
      category: "mern",
      technologies: ["MERN", "Tailwind CSS"],
      description: "A zero-hunger platform connecting NGOs, donors, and drivers with role-based dashboards, inventory management, and participant workflows.",
      image: "/assests/nourishnet.png",
      github: "https://github.com/Theekshana-Jayalath",
      demo: "https://nourishnetzh.vercel.app/",
    },
    {
      title: "MediSphere",
      subtitle: "Doctor Channeling System (Microservices)",
      category: "mern",
      technologies: ["MERN", "Docker", "PayHere"],
      description: "Microservices-based appointment and payment platform featuring doctor filtering, appointment tracking, and secure PayHere integration.",
      image: "/assests/medisphere.png",
      github: "https://github.com/Theekshana-Jayalath",
    },
    {
      title: "FabricFlow",
      subtitle: "Apparel Manufacturing Management (MVC)",
      category: "mern",
      technologies: ["MERN", "Tailwind CSS"],
      description: "Comprehensive distribution management module designed to efficiently track and manage drivers and delivery vehicles.",
      image: "/assests/fabricflow.png",
      github: "https://github.com/Theekshana-Jayalath/FabricFlow-frontend",
      demo: "https://fabric-flow-eta.vercel.app/",
    },
    {
      title: "Zenny",
      subtitle: "Daily Habit Routine Mobile App",
      category: "mobile",
      technologies: ["Kotlin", "Room Database"],
      description: "Habit-tracking mobile application featuring daily reminders, progress visualization, and offline storage via Room Database.",
      github: "https://github.com/Theekshana-Jayalath/ZennyRoomDB",
    },
    {
      title: "Curvo Currency",
      subtitle: "Currency Exchange Web Application",
      category: "web",
      technologies: ["MERN Stack", "APIs"],
      description: "Real-time currency converter utilizing external APIs to deliver accurate, fast conversions through a highly responsive interface.",
      image: "/assests/curvocurrency.png",
      github: "https://github.com/Theekshana-Jayalath",
      demo: "https://curvo-currency-converter.vercel.app/",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "mern", label: "MERN Stack" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "web", label: "Web Integrations" },
  ];

  const [activeFilter, setActiveFilter] = useState("all");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Filter projects based on choice
  const filteredProjects = projects.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  // Horizontal scroll handler
  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Scroll by 85% of visible container width
      const scrollAmount = clientWidth * 0.85;
      const scrollTo = direction === "left"
        ? scrollLeft - scrollAmount
        : scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="Projects" className="relative py-24 sm:py-32 scroll-mt-20 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute left-1/10 top-1/4 w-96 h-96 bg-pink-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Section Header with Left/Right Buttons */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-12 gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-xs uppercase tracking-widest text-pink-400 font-semibold mb-2">
              My Built Catalog
            </h4>
            <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-4 w-20" />
          </div>

          {/* Slider controls for desktop navigation */}
          {filteredProjects.length > 0 && (
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleScroll("left")}
                className="w-11 h-11 rounded-full border border-white/10 bg-brand-navy/60 hover:bg-white/10 text-white flex items-center justify-center transition-all hover:border-pink-500/30 active:scale-95 cursor-pointer shadow-md"
                aria-label="Scroll left"
              >
                <FaChevronLeft className="text-sm" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                className="w-11 h-11 rounded-full border border-white/10 bg-brand-navy/60 hover:bg-white/10 text-white flex items-center justify-center transition-all hover:border-pink-500/30 active:scale-95 cursor-pointer shadow-md"
                aria-label="Scroll right"
              >
                <FaChevronRight className="text-sm" />
              </button>
            </div>
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300 cursor-pointer ${activeFilter === cat.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 border-white/20 text-white shadow-md shadow-pink-950/40"
                  : "bg-white/5 border-white/5 text-white/60 hover:text-white hover:bg-white/10"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Horizontal Scroll Showcase Panel */}
        {filteredProjects.length > 0 ? (
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-10 pt-4 px-2 -mx-2 snap-x snap-mandatory no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <div
                  key={project.title}
                  className="w-[280px] xs:w-[310px] sm:w-[360px] md:w-[380px] shrink-0 snap-center"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500 font-medium">
            No projects found in this category.
          </div>
        )}

      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    // Limit rotation to maximum 10 degrees
    const tiltX = (mouseY / (height / 2)) * -10;
    const tiltY = (mouseX / (width / 2)) * 10;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="h-full"
    >
      {/* Interactive 3D tilt frame without images */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
        }}
        className="glass-panel-glow w-full h-full rounded-2xl border border-white/10 overflow-hidden flex flex-col relative transition-transform duration-300 ease-out shadow-[0_15px_35px_rgba(0,0,0,0.4)] group hover:border-pink-500/30 bg-[#0a0014]"
      >
        {/* Top Image Section */}
        <div className="w-full h-44 sm:h-48 relative overflow-hidden bg-white/5 border-b border-white/5 shrink-0 flex items-center justify-center p-4">
          {/* Ambient glow behind image */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-600/10 z-0 pointer-events-none group-hover:opacity-100 opacity-50 transition-opacity duration-500" />
          
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-700 ease-out drop-shadow-xl" 
            />
          ) : (
            <div className="relative z-10 flex flex-col items-center justify-center text-white/20">
               <FaCode className="text-4xl mb-2 opacity-50" />
               <span className="text-xs font-semibold uppercase tracking-widest">{project.title}</span>
            </div>
          )}
          
          {/* Category Badge */}
          <div className="absolute top-3 left-3 z-20">
             <span className="px-3 py-1 rounded-full bg-black/60 border border-white/10 text-[9px] font-bold uppercase text-pink-400 tracking-wider backdrop-blur-md shadow-sm">
                {project.category === "mern" ? "MERN Stack" : project.category === "mobile" ? "Mobile App" : "Web App"}
             </span>
          </div>
        </div>

        {/* Bottom Content Section */}
        <div className="p-5 sm:p-6 flex flex-col flex-grow relative z-10 bg-gradient-to-b from-transparent to-black/40">
          <div className="space-y-3" style={{ transform: "translateZ(20px)" }}>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-pink-300 transition-colors duration-300 drop-shadow-md line-clamp-1">
                {project.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-purple-200 font-medium tracking-wide mt-1 drop-shadow-md line-clamp-1">
                {project.subtitle}
              </p>
            </div>

            <p className="text-[11px] sm:text-[12px] text-gray-300/90 leading-relaxed drop-shadow-sm min-h-[50px] line-clamp-3">
              {project.description}
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[9px] sm:text-[10px] text-gray-200 backdrop-blur-md shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-6 mt-auto flex gap-3" style={{ transform: "translateZ(15px)" }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 rounded-xl text-[10px] sm:text-[11px] font-semibold tracking-wider border border-white/10 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center gap-2 backdrop-blur-sm transition-all duration-300 hover:border-pink-500/30 text-center shadow-sm"
            >
              <FaGithub className="text-sm" />
              GitHub
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl text-[10px] sm:text-[11px] font-semibold tracking-wider bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white flex items-center justify-center gap-2 transition-all duration-300 hover:opacity-100 opacity-95 shadow-md shadow-pink-900/50 text-center"
              >
                <FaExternalLinkAlt className="text-[10px]" />
                Live Demo
              </a>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
}