"use client";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
// GSAP removed to avoid dependency issues; using JS-driven slider centering

import profileImage from "../public/assests/AM.png";
import zenny from "../public/assests/p1.png";
import profileImage1 from "../public/assests/my1..png";
import FF from "../public/assests/FF.jpeg";
import GG from "../public/assests/GG.png";
import VP from "../public/assests/vp.png";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { GoMoveToTop } from "react-icons/go";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import StatusDot from "../components/StatusDot";
import Typewriter from "../components/Typewriter";
import { Patrick_Hand } from "next/font/google";

const patrickHand = Patrick_Hand({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const [activeSection, setActiveSection] = React.useState<string>("None");
  const [homeAnimKey, setHomeAnimKey] = React.useState<number>(0);
  const [contactAnimKey, setContactAnimKey] = React.useState<number>(0);
  const [mobileNavOpen, setMobileNavOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    const ids = ["About", "Projects", "Contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const navOffset = 80; // approximate fixed navbar height
    const updateActive = () => {
      const scrollPos = window.scrollY + navOffset + 1;
      const aboutEl = document.getElementById("About");
      if (aboutEl && scrollPos < aboutEl.offsetTop) {
        // On Home area: no nav item highlighted
        setActiveSection("None");
        return;
      }

      let current = ids[0];
      for (const el of sections) {
        const top = el.offsetTop;
        if (scrollPos >= top) current = el.id;
      }
      setActiveSection(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  React.useEffect(() => {
    const targets = ["Home", "Contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (targets.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            if (e.target.id === "Home") setHomeAnimKey((k) => k + 1);
            if (e.target.id === "Contact") setContactAnimKey((k) => k + 1);
          }
        });
      },
      { threshold: 0.5 }
    );

    targets.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return (
    <div>
      <Head>
        <title>Portfolio website</title>
          <link rel="icon" href="/fav.png" />

  <meta name="description" content="My personal portfolio website" />
      </Head>

  <main className="min-h-screen overflow-x-hidden bg-linear-to-b from-[#0b1020] via-[#0e1530] to-[#0a0f25] px-4 sm:px-6 md:px-10">

        {/* Home Section */}
        <section id="Home"
          className="min-h-screen scroll-mt-20 
                     bg-linear-to-b from-[#0b1020] via-[#0e1530] to-[#0a0f25]
                     text-white"
        >
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
              {/* Home removed from navbar by request */}
              <li>
                <a
                  href="#About"
                  className={
                    activeSection === "About"
                      ? "text-pink-400 font-semibold"
                
                      : "text-white/70 hover:text-pink-400"
                  }
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#Projects"
                  className={
                    activeSection === "Projects"
                      ? "text-pink-400 font-semibold"
                      : "text-white/70 hover:text-pink-400"
                  }
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#Contact"
                  className={
                    activeSection === "Contact"
                      ? "text-pink-400 font-semibold"
                      : "text-white/70 hover:text-pink-400"
                  }
                >
                  Contact
                </a>
              </li>
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
                  <li>
                    <a
                      href="#About"
                      onClick={() => setMobileNavOpen(false)}
                      className={
                        activeSection === "About"
                          ? "text-pink-400 font-semibold"
                          : "text-white/90 hover:text-pink-400"
                      }
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Projects"
                      onClick={() => setMobileNavOpen(false)}
                      className={
                        activeSection === "Projects"
                          ? "text-pink-400 font-semibold"
                          : "text-white/90 hover:text-pink-400"
                      }
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Contact"
                      onClick={() => setMobileNavOpen(false)}
                      className={
                        activeSection === "Contact"
                          ? "text-pink-400 font-semibold"
                          : "text-white/90 hover:text-pink-400"
                      }
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </motion.aside>
            </div>
          )}

          {/* Hero Content */}
          <div className="container mx-auto px-2 min-h-[calc(100vh-5rem)] flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
              {/* LEFT – Text */}
              <div className="space-y-5 text-center order-2 md:order-1 mt-2 md:mt-8">
        <h1 className="text-7xl md:text-6xl font-bold" key={homeAnimKey}>
          <Typewriter
                    parts={[
                      { text: "Hi, I’m " },
      { text: "Theekshana", className: "bg-linear-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent text-5xl sm:text-6xl md:text-6xl lg:text-7xl" },
                    ]}
                    speedMs={55}
                    cursor={false}
                  />
                </h1>

  <h2 className="text-3xl" key={`sub-${homeAnimKey}`}>
                  <Typewriter
                    parts={[
          { text: "Full-Stack Developer", className: "bg-linear-to-r from-purple-800 via-fuchsia-800 to-pink-700 bg-clip-text text-transparent" },
                    ]}
                    speedMs={55}
                    delayMs={55 * ("Hi, I’m Theekshana".length)}
                    cursor={false}
                  />
                </h2>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 text-green-400 w-fit whitespace-nowrap">
                  <StatusDot size={10} />
                  <span className="text-sm md:text-base">Available for new projects</span>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4 justify-center">
                  <a
                    href="https://drive.google.com/uc?export=download&id=1lABeOR9KJG13JWcEpOFtVol4Hcj87S2d"
                    download
                    className="bg-linear-to-r from-[#260c35] via-[#3a1a4b] to-[#4b2160]
                               px-5 py-2 rounded-full text-sm font-medium
                               hover:opacity-90 transition"
                  >
                    <IoMdDownload className="inline-block mr-2 text-lg align-[-0.15em]" />
                    Download CV
                  </a>

                  <a
                    href="#Contact"
                    className="px-5 py-2 rounded-full text-sm font-medium
                               border border-purple-500/60
                               hover:bg-purple-500/10 transition"
                  >
                    Contact Me
                  </a>
                </div>
                
              </div>

              {/* RIGHT – Image*/}
              <div className="order-1 md:order-2 flex flex-col items-center gap-4">
                <motion.div key={`img-${homeAnimKey}`}
                  className="relative flex justify-center"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 120, damping: 16 }}
                >
                  <div
                    className="absolute w-72 h-72 md:w-110 md:h-150
                               bg-linear-to-r from-pink-500 to-purple-500
                               rounded-full blur-3xl opacity-40"
                  />

                  <Image
                    src={profileImage1}
                    alt="Profile"
                    width={550}
                    height={700}
                    className="relative z-10 object-cover rounded-xl max-w-full h-auto"
                    priority
                  />
                </motion.div>
                
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
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
                    src={profileImage}
                    alt="About Me"
                    width={420}
                    height={420}
                    className="relative z-10 rounded-full object-cover border border-white/10 mx-auto max-w-full h-auto"
                  />
                  {/* Left column boxes (visible on md+) */}
                  <div className="mt-6 sm:mt-8 hidden md:grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <div className="border border-white/15 rounded-2xl bg-white/5 backdrop-blur-md p-5 shadow-sm">
                      <h3 className="font-semibold text-lg bg-clip-text text-transparent text-center bg-linear-to-r from-purple-400 via-fuchsia-500 to-pink-500">Skills</h3>
                      <div className="mt-3 flex flex-wrap gap-2 text-sm text-white/80">
                        <span className="border border-white/20 rounded-md px-2 py-1">HTML</span>
                        <span className="border border-white/20 rounded-md px-2 py-1">CSS</span>
                        <span className="border border-white/20 rounded-md px-2 py-1">PHP</span>
                        <span className="border border-white/20 rounded-md px-2 py-1">C++</span>
                        <span className="border border-white/20 rounded-md px-2 py-1">C</span>
                        <span className="border border-white/20 rounded-md px-2 py-1">MySQL</span>
                        <span className="border border-white/20 rounded-md px-2 py-1">MongoDB</span>
                        <span className="border border-white/20 rounded-md px-2 py-1">React</span>
                        <span className="border border-white/20 rounded-md px-2 py-1">Node.js</span>
                      </div>
                    </div>

                    <div className="border border-white/15 rounded-2xl bg-white/5 backdrop-blur-md p-5 shadow-sm">
                      <h3 className="font-semibold text-lg bg-clip-text text-transparent text-center bg-linear-to-r from-purple-400 via-fuchsia-500 to-pink-500">Hobbies</h3>
                      <div className="mt-3 flex flex-wrap gap-2 text-sm text-white/80">
                        <span className="border border-white/20 rounded-md px-2 py-1">Athletics</span>
                        <span className="border border-white/20 rounded-md px-2 py-1">Dancing</span>
                        <span className="border border-white/20 rounded-md px-2 py-1">Reading</span>
                        <span className="border border-white/20 rounded-md px-2 py-1">Traveling</span>
                      </div>
                    </div>
                  </div>
                
                </div>
              </motion.div>

              <motion.div
                className="text-gray-300 space-y-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
              >
                <p className={`${patrickHand.className} text-xl md:text-2xl leading-relaxed`}>
                  I’m a Software Engineering undergraduate at SLIIT
                  with a strong passion for full-stack web development. I enjoy building modern,
                  responsive, and user-friendly applications that balance performance with design.
                </p>

                <p className={`${patrickHand.className} text-xl md:text-2xl leading-relaxed`}>
                  My journey began during my university years, where curiosity quickly turned into
                  passion. I enjoy learning new technologies, experimenting with features, and
                  improving my skills through hands-on projects.
                </p>

                <p className={`${patrickHand.className} text-xl md:text-2xl leading-relaxed`}>
                  Driven by continuous learning, my goal is to contribute to meaningful projects
                  and grow into a developer who creates impactful digital solutions.
                </p>

                {/* Right column boxes (visible on md+) */}
                <div className="mt-8 md:mt-14 hidden md:grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-white/15 rounded-2xl bg-white/5 backdrop-blur-md p-5 shadow-sm">
                      <h3 className="font-semibold text-lg bg-clip-text text-transparent text-center bg-linear-to-r from-purple-400 via-fuchsia-500 to-pink-500">Education</h3>
                      <div className="mt-3 flex flex-wrap gap-2 text-sm text-white/80">
                        <span className="border border-white/20 rounded-md px-2 py-1">BSc (Hons) in IT – Software Engineering (SLIIT)</span>
                        <span className="border border-white/20 rounded-md px-2 py-1">Bandarawela Central College – A/L & O/L</span>
                      </div>
                    </div>

                    <div className="border border-white/15 rounded-2xl bg-white/5 backdrop-blur-md p-5 shadow-sm">
                      <h3 className="font-semibold text-lg bg-clip-text text-transparent text-center bg-linear-to-r from-purple-400 via-fuchsia-500 to-pink-500">Experience</h3>
                      <div className="mt-3 flex flex-wrap gap-2 text-sm text-white/80">
                        <span className="border border-white/20 rounded-md px-2 py-1 text-center">BOC<br/>Job Skills Development Training Programme<br/>(Andaulpotha Branch – 2022)</span>
                      </div>
                    </div>
                  </div>
        </motion.div>

            </div>
            {/* Mobile-only combined 2×2 boxes below paragraphs */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:hidden">
              {/* Skills */}
              <div className="border border-white/15 rounded-2xl bg-white/5 backdrop-blur-md p-4 shadow-sm">
                <h3 className="font-semibold text-base bg-clip-text text-transparent text-center bg-linear-to-r from-purple-400 via-fuchsia-500 to-pink-500">Skills</h3>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/80">
                  <span className="border border-white/20 rounded-md px-2 py-1">HTML</span>
                  <span className="border border-white/20 rounded-md px-2 py-1">CSS</span>
                  <span className="border border-white/20 rounded-md px-2 py-1">PHP</span>
                  <span className="border border-white/20 rounded-md px-2 py-1">C++</span>
                  <span className="border border-white/20 rounded-md px-2 py-1">C</span>
                  <span className="border border-white/20 rounded-md px-2 py-1">MySQL</span>
                  <span className="border border-white/20 rounded-md px-2 py-1">MongoDB</span>
                  <span className="border border-white/20 rounded-md px-2 py-1">React</span>
                  <span className="border border-white/20 rounded-md px-2 py-1">Node.js</span>
                </div>
              </div>

              {/* Hobbies */}
              <div className="border border-white/15 rounded-2xl bg-white/5 backdrop-blur-md p-4 shadow-sm">
                <h3 className="font-semibold text-base bg-clip-text text-transparent text-center bg-linear-to-r from-purple-400 via-fuchsia-500 to-pink-500">Hobbies</h3>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/80">
                  <span className="border border-white/20 rounded-md px-2 py-1">Athletics</span>
                  <span className="border border-white/20 rounded-md px-2 py-1">Dancing</span>
                  <span className="border border-white/20 rounded-md px-2 py-1">Reading</span>
                  <span className="border border-white/20 rounded-md px-2 py-1">Traveling</span>
                </div>
              </div>

              {/* Education */}
              <div className="border border-white/15 rounded-2xl bg-white/5 backdrop-blur-md p-4 shadow-sm">
                <h3 className="font-semibold text-base bg-clip-text text-transparent text-center bg-linear-to-r from-purple-400 via-fuchsia-500 to-pink-500">Education</h3>
                <div className="mt-3 text-xs text-white/80 space-y-1">
                  <p>SLIIT - Software Engineering (Undergraduate)</p>
                </div>
              </div>

              {/* Experience */}
              <div className="border border-white/15 rounded-2xl bg-white/5 backdrop-blur-md p-4 shadow-sm">
                <h3 className="font-semibold text-base bg-clip-text text-transparent text-center bg-linear-to-r from-purple-400 via-fuchsia-500 to-pink-500">Experience</h3>
                <div className="mt-3 text-xs text-white/80 space-y-1">
                  <p className="text-center">BOC - Job Skills Development Training Programme (Andaulpotha Branch, 2022)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="Projects"
          className="min-h-screen py-32 scroll-mt-20
                     bg-linear-to-b from-[#0b1020] via-[#0e1530] to-[#0a0f25]"
        >
          <div>
            <h2
              className="text-6xl py-2 font-bold text-center
                         bg-linear-to-b from-[#7717ae] via-[#b64dea] to-[#c596d8]
                         bg-clip-text text-transparent"
            >
              Build Journal
            </h2>

            <br /><br /><br />
            {/* Unified grid: 2x2 on md+, 1x4 on mobile */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 text-white">
                {/* Zenny */}
                <div className="group border border-white/20 rounded-2xl bg-white/5 backdrop-blur-md p-4 sm:p-6 shadow-lg transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-2xl hover:bg-white/10">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-semibold text-lg bg-linear-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent text-center">Zenny - A Zen Meditation App</p>
                    <a
                      href="https://github.com/Theekshana-Jayalath/ZennyRoomDB"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Zenny GitHub"
                      className="shrink-0 inline-flex items-center justify-center rounded-full p-2 text-white/80 hover:text-purple-400 focus-visible:text-purple-400 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50"
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                  </div>
                  <div className="mt-3">
                    <Image src={zenny} alt="Zenny Project" width={600} height={400} className="w-full h-auto rounded-md border border-white/10" />
                  </div>
                  <p className="mt-3 text-sm text-gray-300">
                    Zenny is a user-friendly Android app built with Kotlin and Room Database for local data.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    <span className="border border-white/20 rounded-md px-2 py-1">Android Studio</span>
                    <span className="border border-white/20 rounded-md px-2 py-1">Kotlin</span>
                    <span className="border border-white/20 rounded-md px-2 py-1">Room DB</span>
                  </div>
                </div>

                {/* Fabric Flow */}
                <div className="group border border-white/20 rounded-2xl bg-white/5 backdrop-blur-md p-4 sm:p-6 shadow-lg transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-2xl hover:bg-white/10">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-semibold text-lg bg-linear-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent text-center">Fabric Flow</p>
                    <a
                      href="https://github.com/Theekshana-Jayalath/FabricFlow-frontend"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Fabric Flow GitHub"
                      className="shrink-0 inline-flex items-center justify-center rounded-full p-2 text-white/80 hover:text-purple-400 focus-visible:text-purple-400 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50"
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                  </div>
                  <div className="mt-3">
                    <Image src={FF} alt="Fabric Flow" width={900} height={600} className="w-full h-auto rounded-md border border-white/10" />
                  </div>
                  <p className="mt-3 text-sm text-gray-300">
                    MERN stack app to streamline fabric and apparel workflows.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    <span className="border border-white/20 rounded-md px-2 py-1">React</span>
                    <span className="border border-white/20 rounded-md px-2 py-1">Node.js</span>
                    <span className="border border-white/20 rounded-md px-2 py-1">MongoDB</span>
                  </div>
                </div>

                {/* GlitchZone */}
                <div className="group border border-white/20 rounded-2xl bg-white/5 backdrop-blur-md p-4 sm:p-6 shadow-lg transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-2xl hover:bg-white/10">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-semibold text-lg bg-linear-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent text-center">GlitchZone Gaming</p>
                    <a
                      href="https://github.com/Theekshana-Jayalath/GlitchZone-Gaming"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open GlitchZone GitHub"
                      className="shrink-0 inline-flex items-center justify-center rounded-full p-2 text-white/80 hover:text-purple-400 focus-visible:text-purple-400 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50"
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                  </div>
                  <div className="mt-3">
                    <Image src={GG} alt="GlitchZone Gaming" width={600} height={400} className="w-full h-auto rounded-md border border-white/10" />
                  </div>
                  <p className="mt-3 text-sm text-gray-300">
                    Web-based gaming platform built with HTML, CSS, and JavaScript.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    <span className="border border-white/20 rounded-md px-2 py-1">HTML</span>
                    <span className="border border-white/20 rounded-md px-2 py-1">CSS</span>
                    <span className="border border-white/20 rounded-md px-2 py-1">JavaScript</span>
                  </div>
                </div>

                {/* Vax Portal */}
                <div className="group border border-white/20 rounded-2xl bg-white/5 backdrop-blur-md p-4 sm:p-6 shadow-lg transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-2xl hover:bg-white/10">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-semibold text-lg bg-linear-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent text-center">Vax-Portal</p>
                    <a
                      href="https://github.com/Theekshana-Jayalath/IWT-Vax-Portal"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Vax-Portal GitHub"
                      className="shrink-0 inline-flex items-center justify-center rounded-full p-2 text-white/80 hover:text-purple-400 focus-visible:text-purple-400 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50"
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                  </div>
                  <div className="mt-3">
                    <Image src={VP} alt="Vax Portal" width={600} height={400} className="w-full h-auto rounded-md border border-white/10" />
                  </div>
                  <p className="mt-3 text-sm text-gray-300">
                    Web app using HTML, CSS and PHP to manage vaccine registrations.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    <span className="border border-white/20 rounded-md px-2 py-1">HTML</span>
                    <span className="border border-white/20 rounded-md px-2 py-1">CSS</span>
                    <span className="border border-white/20 rounded-md px-2 py-1">PHP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="Contact"
          className="min-h-screen py-16 sm:py-24 md:py-32 scroll-mt-20
                     bg-linear-to-b from-[#0b1020] via-[#0e1530] to-[#0a0f25]"
        >
            <div className="flex flex-col items-center justify-center gap-10 mt-6 sm:mt-10 md:mt-12">

              <div className="w-full max-w-2xl text-center mx-auto">
                <p className="text-5xl mb-4" key={contactAnimKey}>
                  <Typewriter
                    parts={[
                      {
                        text: "Let's connect!",
                        className:
                          "bg-linear-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent",
                      },
                    ]}
                    speedMs={55}
                    cursor={false}
                  />
                </p><br/>
                <p className="text-gray-300">
                  Got an idea, a project in mind, or just want to connect?<br />
                  I’m always excited to explore new opportunities and creative conversations.<br />
                  Drop a message anytime — I’d love to hear from you!
                </p>

                <br />
                <p className=" text-xl text-purple-300">Email</p>
                <p className="text-gray-300">
                  <a
                    href="mailto:theekshanapabodi2001@gmail.com"
                    className="text-white hover:text-blue-400 hover:underline focus:text-white focus:no-underline focus:outline-none focus-visible:text-blue-400 focus-visible:underline"
                  >
                    theekshanapabodi2001@gmail.com
                  </a>
                </p>

                <br />
                <p className=" text-xl text-purple-300">Phone</p>
                <p className="text-gray-300">
                  <a
                    href="tel:+94765738311"
                    className="text-white hover:text-blue-400 hover:underline focus:text-white focus:no-underline focus:outline-none focus-visible:text-blue-400 focus-visible:underline"
                  >
                    +94 76 573 8311
                  </a>
                </p>

                <br />
                <p className="text-gray-300 text-xl">You can also find me on:</p>

                <ul className="flex items-center justify-center gap-5 mt-4">
                  <li>
                    <a
                      href="https://www.instagram.com/_t_k__g_i_r_l_?igsh=MTRzcnJqZWd2ejh4bw=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center rounded-full p-2 text-white/70 hover:text-purple-400 focus-visible:text-purple-400 active:text-purple-400 transition transform hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50"
                    >
                      <FaInstagram className="text-3xl" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/theekshana-jayalath/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center rounded-full p-2 text-white/70 hover:text-purple-400 focus-visible:text-purple-400 active:text-purple-400 transition transform hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50"
                    >
                      <FaLinkedin className="text-3xl" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Theekshana-Jayalath"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center rounded-full p-2 text-white/70 hover:text-purple-400 focus-visible:text-purple-400 active:text-purple-400 transition transform hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50"
                    >
                      <FaGithub className="text-3xl" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/share/17m1auNH9d/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center rounded-full p-2 text-white/70 hover:text-purple-400 focus-visible:text-purple-400 active:text-purple-400 transition transform hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50"
                    >
                      <FaFacebook className="text-3xl" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Form removed by request */}

            </div>

        </section>

        <footer className="border-t border-white/10 py-6 text-center text-gray-400 text-sm">
          © 2025 Theekshana Jayalath. All rights reserved.
        </footer>

        {/* Go to Top button (visible from About and below) */}
  {activeSection !== "None" && (
          <button
            aria-label="Go to Top"
            onClick={() => {
              const el = document.getElementById("Home");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="fixed bottom-6 right-6 z-50 rounded-full p-3 shadow-lg border border-white/20 bg-linear-to-r from-[#260c35] via-[#3a1a4b] to-[#4b2160] text-white hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50"
          >
            <GoMoveToTop className="text-xl" />
          </button>
        )}

      </main>
    </div>
  );
}
