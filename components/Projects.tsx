"use client";
import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "NourishNet",
    subtitle: "Zero Hunger Management System",
    technologies: ["MERN Stack", "Tailwind CSS", "Authentication", "Admin Dashboard"],
    github: "https://github.com/Theekshana-Jayalath",
    image: "/assests/FF.jpeg",
  },
  {
    title: "MediSphere",
    subtitle: "Doctor Channeling System",
    technologies: ["MERN Stack", "Tailwind CSS", "Docker", "Microservices"],
    github: "https://github.com/Theekshana-Jayalath",
    image: "/assests/FF.jpeg",
  },
  {
    title: "FabricFlow",
    subtitle: "Apparel Manufacturing Management",
    technologies: ["MERN Stack", "Tailwind CSS", "Distribution Management"],
    github: "https://github.com/Theekshana-Jayalath/FabricFlow-frontend",
    image: "/assests/FF.jpeg",
  },
  {
    title: "Zenny",
    subtitle: "Daily Habit Routine Mobile App",
    technologies: ["Kotlin", "Room Database", "Android Studio"],
    github: "https://github.com/Theekshana-Jayalath/ZennyRoomDB",
    image: "/assests/FF.jpeg",
  },
  {
    title: "Curvo Currency",
    subtitle: "Currency Exchange Web App",
    technologies: ["MERN Stack", "API Integration", "Real-time Data"],
    github: "https://github.com/Theekshana-Jayalath",
    image: "/assests/FF.jpeg",
  },
];

export default function Projects() {
  return (
    <section
      id="Projects"
      className="min-h-screen py-20 sm:py-24 md:py-32 scroll-mt-20 px-4 sm:px-6 md:px-10
                 bg-linear-to-b from-[#0b1020] via-[#0e1530] to-[#0a0f25]"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold mb-4 bg-linear-to-b from-[#7717ae] via-[#b64dea] to-[#c596d8] bg-clip-text text-transparent">
            Build Journal
          </h2>
          <div className="h-1 w-24 bg-linear-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full mx-auto"></div>
          <p className="mt-6 text-gray-400 text-lg">Showcasing my latest projects and innovations</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.1,
      }}
      whileHover={{ y: -12 }}
      className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Background Image */}
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Multi-layer Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-[#0b1020] via-[#0b1020]/40 to-transparent group-hover:from-[#0a0f25] transition-all duration-300" />
      
      {/* Accent Gradient Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-linear-to-br from-purple-500 via-pink-500 to-transparent" />

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-between p-6">
        {/* Top: GitHub Link */}
        <div className="flex justify-end">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 hover:text-pink-400 hover:bg-pink-500/20 hover:border-pink-500/50 transition-all duration-300"
          >
            <FaGithub className="text-xl" />
          </motion.a>
        </div>

        {/* Bottom: Project Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          {/* Title Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-purple-300/90 font-medium">
              {project.subtitle}
            </p>
          </div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="flex flex-wrap gap-2"
          >
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/10 border border-white/20 text-pink-300 backdrop-blur-sm hover:bg-pink-500/20 hover:border-pink-400/50 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/10 border border-white/20 text-purple-300">
                +{project.technologies.length - 3}
              </span>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Glow Effect on Hover */}
      <motion.div
        className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(236, 72, 153, 0.15), transparent 70%)",
        }}
      />
    </motion.div>
  );
}