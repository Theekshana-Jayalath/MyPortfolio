"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { IoMdDownload } from "react-icons/io";
import {
  FaLinkedinIn, FaGithub, FaInstagram, FaFacebookF, FaMedium,
  FaRegUser, FaLaptopCode, FaUsers, FaAward, FaMugHot
} from "react-icons/fa";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const words = ["Software Engineer", "Full Stack Web Developer"];
  const typingSpeed = 100;
  const deletingSpeed = 60;
  const pauseTime = 2000;

  // Typewriter effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = words[wordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentWord.substring(0, typedText.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentWord.substring(0, typedText.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && typedText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex]);

  // Welcome Intro timer (3.2 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  // Mouse tilt effect for 3D picture card
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map mouse positions to rotations
  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const socialLinks = [
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/theekshana-jayalath/",
      label: "LinkedIn",
      color: "hover:bg-[#0077B5] hover:border-[#0077B5]",
    },
    {
      icon: FaGithub,
      href: "https://github.com/Theekshana-Jayalath",
      label: "GitHub",
      color: "hover:bg-[#24292e] hover:border-[#24292e]",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/_t_k__g_i_r_l_?igsh=MTRzcnJqZWd2ejh4bw==",
      label: "Instagram",
      color: "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent",
    },
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/share/17m1auNH9d/",
      label: "Facebook",
      color: "hover:bg-[#1877F2] hover:border-[#1877F2]",
    },
    {
      icon: FaMedium,
      href: "https://medium.com/@theekshanapabodi2001",
      label: "Medium",
      color: "hover:bg-[#00ab6c] hover:border-[#00ab6c]",
    },
  ];

  const stats = [
    {
      label: "Projects Completed",
      value: "5+",
      icon: FaLaptopCode,
    },
    {
      label: "Happy Clients",
      value: "5+",
      icon: FaUsers,
    },
    {
      label: "Years Experience",
      value: "2+",
      icon: FaAward,
    },
    {
      label: "Cups of Coffee",
      value: "∞",
      icon: FaMugHot,
    },
  ];

  return (
    <section
      id="Home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 md:pt-36 overflow-hidden"
    >
      {/* Visual background ambient circles */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] bg-pink-900/10 rounded-full blur-[150px] -z-10 animate-pulse duration-10000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* TEXT CONTENT (LEFT) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 order-2 lg:order-1"
          >
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-pink-400 uppercase select-none mb-1">
              <FaRegUser className="text-[10px]" />
              Get to Know Me
            </div>

            {/* Greeting & Name */}
            <div className="space-y-1 w-full">
              <span className="block text-2xl sm:text-3xl md:text-4xl text-pink-400 tracking-wide" style={{ fontFamily: "var(--font-cursive)" }}>
                Hello, I'm
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-none sm:whitespace-nowrap" style={{ fontFamily: "var(--font-outfit)" }}>
                Theekshana Jayalath
              </h1>
            </div>

            {/* Subtitle with Code Brackets */}
            <div className="flex items-center gap-1.5 text-xl sm:text-2xl font-bold font-mono text-pink-400 select-none">
              <span>&lt;</span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
                {typedText}
              </span>
              <span>/&gt;</span>
            </div>

            {/* Call To Actions */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
              <a
                href="#Contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("Contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 text-white shadow-lg shadow-purple-950/50 hover:shadow-pink-500/25 hover:opacity-95 transition-all duration-300 border border-white/10 text-center cursor-pointer"
              >
                Contact Me
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=13Mjvm-oZLtR3Gv7WI2urjub7lfER2lCl"
                download="Theekshana_Jayalath_CV.pdf"
                className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide border border-white/10 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center gap-2 backdrop-blur-md transition-all duration-300 hover:border-pink-500/30 cursor-pointer"
              >
                <IoMdDownload className="text-lg" />
                Download CV
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="pt-6 space-y-3">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold text-center lg:text-left">
                Let's network
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="text-lg" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* PROFILE IMAGE CARD (RIGHT) */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6 order-1 lg:order-2">
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              onMouseMove={handleMouse}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 cursor-pointer group"
            >
              {/* Outer Neon Glow Circle in Background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 rounded-full blur-3xl opacity-30 group-hover:opacity-40 transition-opacity duration-500 -z-10" />

              {/* Glassmorphic border ring container */}
              <div className="absolute inset-0 bg-[#050B2D]/40 backdrop-blur-xl rounded-full border border-white/10 group-hover:border-pink-500/30 overflow-hidden flex items-center justify-center p-3 shadow-2xl transition-all duration-300">

                {/* Internal dynamic spinning gradient glow ring */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2A0055]/30 via-transparent to-[#8B005D]/30 opacity-60 z-0" />

                {/* Floating graphic elements */}
                <div className="absolute top-1/10 left-1/10 w-20 h-20 rounded-full bg-pink-500/10 blur-xl animate-pulse" />
                <div className="absolute bottom-1/10 right-1/10 w-24 h-24 rounded-full bg-purple-500/10 blur-xl animate-pulse" />

                {/* Profile Image with conditional intro animation */}
                <div
                  className="relative z-10 w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-white/5 to-white/0 border border-white/5 flex items-center justify-center"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <AnimatePresence mode="wait">
                    {showIntro ? (
                      <motion.div
                        key="intro-animation"
                        initial={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.4 } }}
                        className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-[#050b2d]"
                      >
                        {/* Waving Character Vector SVG */}
                        <svg
                          viewBox="0 0 100 100"
                          className="w-40 h-40 sm:w-48 sm:h-48 drop-shadow-[0_0_15px_rgba(236,72,153,0.35)]"
                          fill="none"
                        >
                          {/* Hair Back */}
                          <circle cx="50" cy="40" r="18" fill="#2A0055" />

                          {/* Face / Head */}
                          <circle cx="50" cy="40" r="15" fill="#FAD1B8" />

                          {/* Eyes & smile */}
                          <circle cx="44" cy="38" r="1.5" fill="#2A0055" />
                          <circle cx="56" cy="38" r="1.5" fill="#2A0055" />
                          <path d="M47 46 Q50 49 53 46" stroke="#8B005D" strokeWidth="1.8" strokeLinecap="round" fill="none" />

                          {/* Hair Front Bangs */}
                          <path
                            d="M33 34 C33 22, 67 22, 67 34 C67 38, 64 42, 64 42 C58 37, 42 37, 36 42 C36 42, 33 38, 33 34"
                            fill="#2A0055"
                          />
                          {/* Hair Accessories / Highlights */}
                          <circle cx="36" cy="28" r="2.5" fill="#8B005D" />
                          <circle cx="64" cy="28" r="2.5" fill="#8B005D" />

                          {/* Body / Sweater */}
                          <path
                            d="M28 78 C28 64, 35 58, 50 58 C65 58, 72 64, 72 78 Z"
                            fill="url(#sweaterGrad)"
                          />

                          {/* Speech bubble "Hi!" */}
                          <motion.g
                            initial={{ scale: 0, opacity: 0, y: 8 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
                          >
                            <path
                              d="M60 25 C60 21, 71 21, 71 25 C71 29, 66 31, 60 29 C60 28, 60 26, 60 25"
                              fill="#8B005D"
                            />
                            <circle cx="68" cy="19" r="9" fill="#8B005D" />
                            <text
                              x="68"
                              y="21"
                              fill="#FFFFFF"
                              fontSize="7.5"
                              fontWeight="extrabold"
                              textAnchor="middle"
                              fontFamily="sans-serif"
                            >
                              Hi!
                            </text>
                          </motion.g>

                          {/* Waving Arm / Hand */}
                          <motion.g
                            style={{ originX: "28px", originY: "72px" }}
                            animate={{
                              rotate: [0, -28, 12, -28, 12, 0]
                            }}
                            transition={{
                              duration: 2.0,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            {/* Arm */}
                            <path
                              d="M28 70 C20 60, 20 48, 20 48"
                              stroke="#FAD1B8"
                              strokeWidth="6"
                              strokeLinecap="round"
                            />
                            {/* Sleeve */}
                            <path
                              d="M28 70 C23 64, 22 57, 22 57"
                              stroke="#6A0DAD"
                              strokeWidth="7"
                              strokeLinecap="round"
                            />
                            {/* Hand */}
                            <circle cx="20" cy="44" r="3.8" fill="#FAD1B8" />
                          </motion.g>

                          <defs>
                            <linearGradient id="sweaterGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#6A0DAD" />
                              <stop offset="100%" stopColor="#8B005D" />
                            </linearGradient>
                          </defs>
                        </svg>

                        {/* Waving greeting indicator */}
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.9 }}
                          transition={{ delay: 0.6 }}
                          className="text-[10px] uppercase font-extrabold tracking-widest text-pink-400 mt-1 animate-pulse"
                        >
                          Hi there! 👋
                        </motion.span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="profile-image"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 w-full h-full"
                      >
                        <Image
                          src="/assests/my1..png"
                          alt="Theekshana Jayalath"
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700"
                          priority
                        />
                        <div className="absolute inset-0 bg-linear-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Availability Status Badge (Restored underneath image container) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-wider text-green-400/90 uppercase select-none">
                Available For New Projects
              </span>
            </motion.div>
          </div>

        </div>

        {/* Stats Row Counter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 sm:mt-24 p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md grid grid-cols-2 md:grid-cols-4 gap-6 items-center"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex items-center gap-4 justify-center md:justify-start px-2 py-1 md:border-r border-white/5 last:border-r-0 md:even:border-r-0 lg:even:border-r"
              >
                <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 shrink-0">
                  <Icon className="text-xl" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 font-light mt-1.5 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
