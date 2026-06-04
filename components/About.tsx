"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Patrick_Hand } from "next/font/google";

const patrickHand = Patrick_Hand({ subsets: ["latin"], weight: "400" });

export default function About() {
  const skills = [
    "HTML",
    "CSS",
    "PHP",
    "C++",
    "C",
    "MySQL",
    "MongoDB",
    "React",
    "Node.js",
  ];
  const hobbies = ["Athletics", "Dancing", "Reading", "Traveling"];
  const education = ["BSc (Hons) in IT – Software Engineering (SLIIT)", "Bandarawela Central College – A/L & O/L"];
  const experience = ["BOC - Job Skills Development Training Programme (Andaulpotha Branch, 2022)"];

  return (
    <section
      id="About"
      className="min-h-screen py-16 sm:py-24 md:py-32 scroll-mt-20
                 bg-linear-to-b from-[#0b1020] via-[#0e1530] to-[#0a0f25]"
    >
      <div className="w-full px-2 sm:px-6 md:px-10">
        <h2
          className="text-6xl py-2 font-bold text-center
                     bg-linear-to-b from-[#7717ae] via-[#b64dea] to-[#c596d8]
                     bg-clip-text text-transparent"
        >
          README: Me
        </h2>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-4 sm:gap-8 lg:gap-12">
          {/* LEFT – Image and Boxes */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full
                           bg-linear-to-r from-purple-600 to-pink-600
                           blur-3xl opacity-30"
              />

              <Image
                src="/assests/AM.png"
                alt="About Me"
                width={420}
                height={420}
                className="relative z-10 rounded-full object-cover border border-white/10 mx-auto max-w-full h-auto"
              />

              {/* Left column boxes (visible on md+) */}
              <div className="mt-6 sm:mt-8 hidden md:grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <InfoBox title="Skills" items={skills} />
                <InfoBox title="Hobbies" items={hobbies} />
              </div>
            </div>
          </motion.div>

          {/* RIGHT – Text and Boxes */}
          <motion.div
            className="text-gray-300 space-y-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          >
            <p className={`${patrickHand.className} text-xl md:text-2xl leading-relaxed`}>
              I'm a Software Engineering undergraduate at SLIIT with a strong
              passion for full-stack web development. I enjoy building modern,
              responsive, and user-friendly applications that balance
              performance with design.
            </p>

            <p className={`${patrickHand.className} text-xl md:text-2xl leading-relaxed`}>
              My journey began during my university years, where curiosity
              quickly turned into passion. I enjoy learning new technologies,
              experimenting with features, and improving my skills through
              hands-on projects.
            </p>

            <p className={`${patrickHand.className} text-xl md:text-2xl leading-relaxed`}>
              Driven by continuous learning, my goal is to contribute to
              meaningful projects and grow into a developer who creates
              impactful digital solutions.
            </p>

            {/* Right column boxes (visible on md+) */}
            <div className="mt-8 md:mt-14 hidden md:grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoBox title="Education" items={education} />
              <InfoBox title="Experience" items={experience} />
            </div>
          </motion.div>
        </div>

        {/* Mobile-only combined 2×2 boxes */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:hidden">
          <InfoBox title="Skills" items={skills} isMobile />
          <InfoBox title="Hobbies" items={hobbies} isMobile />
          <InfoBox title="Education" items={education} isMobile />
          <InfoBox title="Experience" items={experience} isMobile />
        </div>
      </div>
    </section>
  );
}

interface InfoBoxProps {
  title: string;
  items: string[];
  isMobile?: boolean;
}

function InfoBox({ title, items, isMobile = false }: InfoBoxProps) {
  return (
    <div className={`border border-white/15 rounded-2xl bg-white/5 backdrop-blur-md shadow-sm ${isMobile ? "p-4" : "p-5"}`}>
      <h3
        className={`font-semibold bg-clip-text text-transparent text-center bg-linear-to-r from-purple-400 via-fuchsia-500 to-pink-500 ${isMobile ? "text-base" : "text-lg"}`}
      >
        {title}
      </h3>
      <div className={`mt-3 flex flex-wrap gap-2 ${isMobile ? "text-xs" : "text-sm"} text-white/80`}>
        {items.map((item, idx) => (
          <span
            key={idx}
            className={`border border-white/20 rounded-md px-2 py-1 ${isMobile ? "" : ""}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
