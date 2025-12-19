"use client";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

import profileImage from "../public/assests/AM.png";
import zenny from "../public/assests/p1.png";
import profileImage1 from "../public/assests/my1..png";
import FF from "../public/assests/FF.jpeg";
import GG from "../public/assests/GG.png";
import VP from "../public/assests/VP.png";

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

// Boxes carousel: shows 2 cards at a time, auto-scrolls left, with arrows
function BoxesScroller() {
  const trackRef = React.useRef<HTMLDivElement | null>(null);
  const [cardWidth, setCardWidth] = React.useState(0);
  const [distance, setDistance] = React.useState(0);
  type CSSVars = React.CSSProperties & { ['--distance']?: string; ['--duration']?: string };
  const marqueeVars: CSSVars = {
    '--distance': `${distance}px`,
    '--duration': '25s',
  };

  // Measure approximate card width based on container halves with gap
  React.useEffect(() => {
    const handleResize = () => {
      const container = trackRef.current?.parentElement as HTMLElement | null;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const isSmall = window.innerWidth < 640; // sm breakpoint
      const cardsPerView = isSmall ? 1 : 2;
      const gapPx = 24; // Tailwind gap-6
      const totalGaps = gapPx * (cardsPerView - 1);
      const width = (rect.width - totalGaps) / cardsPerView;
      setCardWidth(width);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Compute half of the track width (one full set) for seamless loop
  React.useEffect(() => {
    const compute = () => {
      const el = trackRef.current;
      if (!el) return;
      const half = el.scrollWidth / 2; // two identical sets => half is one cycle
      setDistance(half);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [cardWidth]);

  // Card template
  const Card = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="shrink-0 px-4" style={{ width: `${cardWidth}px` }}>
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg min-h-64 h-full flex flex-col justify-start text-gray-200">
        <h3 className="font-semibold mb-4 text-2xl text-center text-white sm:bg-clip-text sm:text-transparent sm:bg-linear-to-r sm:from-purple-400 sm:via-fuchsia-500 sm:to-pink-500">{title}</h3>
        <div className="flex flex-wrap gap-3 justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative w-full py-2">
      <div className="overflow-hidden w-full px-4 sm:px-8 md:px-24">
        <div
          ref={trackRef}
          className="boxes-track flex items-stretch gap-6"
          style={marqueeVars}
        >
          {/* Original 4 cards */}
          <Card title="Skills">
            <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">HTML</span>
            <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">CSS</span>
            <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">PHP</span>
            <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">C++</span>
            <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">C</span>
            <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">MySQL</span>
            <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">MongoDB</span>
            <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">React</span>
            <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">Node.js</span>
          </Card>
          <Card title="Hobbies">
            <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">Athletics</span>
            <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">Dancing</span>
            <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">Reading</span>
            <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">Traveling</span>
          </Card>
          <Card title="Education">
            <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">BSc(Hons) in Information Technology - Specializing in Software Engineering - SLIIT</span>
            <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">Bandarawela Central College -AL & OL</span>
          </Card>
          <Card title="Experience">
            <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent text-center">BOC - Job Skills Development Training Programme for School Leavers (Andaulpotha Branch - 2022)</span>
          </Card>

          {/* Duplicate set for seamless loop */}
          <Card title="Skills">
            <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">HTML</span>
            <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">CSS</span>
            <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">PHP</span>
            <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">C++</span>
            <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">C</span>
            <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">MySQL</span>
            <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">MongoDB</span>
            <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">React</span>
            <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">Node.js</span>
          </Card>
          <Card title="Hobbies">
            <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">Athletics</span>
            <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">Dancing</span>
            <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">Reading</span>
            <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">Traveling</span>
          </Card>
          <Card title="Education">
            <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">BSc(Hons) in Information Technology - Specializing in Software Engineering - SLIIT</span>
            <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">Bandarawela Central College -AL & OL</span>
          </Card>
          <Card title="Experience">
            <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">BOC-Job Skills Development Training Programme for School Leavers (Andaulpotha Branch-2022)</span>
          </Card>
        </div>
      </div>
      <style jsx>{`
        .boxes-track {
          animation: marquee var(--duration) linear infinite;
          will-change: transform;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-1 * var(--distance))); }
        }
      `}</style>
    </div>
  );
}

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

  // Re-trigger animations when Home or Contact re-enter viewport
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

  <main className="min-h-screen bg-linear-to-b from-[#0b1020] via-[#0e1530] to-[#0a0f25] px-10">

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
                    className="relative z-10 object-cover rounded-xl"
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
          className="min-h-screen py-32 scroll-mt-20
                     bg-linear-to-b from-[#0b1020] via-[#0e1530] to-[#0a0f25]"
        >
          <div className="w-full px-4 sm:px-8 md:px-10">
            <h2
              className="text-6xl py-2 font-bold text-center
                         bg-linear-to-b from-[#7717ae] via-[#b64dea] to-[#c596d8]
                         bg-clip-text text-transparent"
            >
              README: Me
            </h2>

            <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

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
                    className="relative z-10 rounded-full object-cover border border-white/10"
                  />
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
        </motion.div>

            </div>
            {/* Part 2: Full-width cards below the image+paragraph grid */}
            <div className="mt-16 w-full px-0 sm:px-4 md:px-10">
              <BoxesScroller />
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
            {/* Mobile list (only on phones) */}
            <div className="md:hidden max-w-5xl mx-auto px-4 text-white">
              <ul className="space-y-4">
                {/* Zenny */}
                <li className="border border-white/20 rounded-lg bg-white/5 backdrop-blur-md p-4">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-semibold text-lg bg-linear-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">Zenny - A Zen Meditation App</p>
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
                  <div className="mt-2 flex flex-wrap gap-2 text-xs">
                    <span className="border border-white/20 rounded-md px-2 py-1">Android Studio</span>
                    <span className="border border-white/20 rounded-md px-2 py-1">Kotlin</span>
                    <span className="border border-white/20 rounded-md px-2 py-1">Room DB</span>
                  </div>
                </li>

                {/* Fabric Flow */}
                <li className="border border-white/20 rounded-lg bg-white/5 backdrop-blur-md p-4">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-semibold text-lg bg-linear-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">Fabric Flow</p>
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
                  <div className="mt-2 flex flex-wrap gap-2 text-xs">
                    <span className="border border-white/20 rounded-md px-2 py-1">React</span>
                    <span className="border border-white/20 rounded-md px-2 py-1">Node.js</span>
                    <span className="border border-white/20 rounded-md px-2 py-1">MongoDB</span>
                  </div>
                </li>

                {/* GlitchZone */}
                <li className="border border-white/20 rounded-lg bg-white/5 backdrop-blur-md p-4">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-semibold text-lg bg-linear-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">GlitchZone Gaming</p>
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
                  <div className="mt-2 flex flex-wrap gap-2 text-xs">
                    <span className="border border-white/20 rounded-md px-2 py-1">HTML</span>
                    <span className="border border-white/20 rounded-md px-2 py-1">CSS</span>
                    <span className="border border-white/20 rounded-md px-2 py-1">JavaScript</span>
                  </div>
                </li>

                {/* Vax Portal */}
                <li className="border border-white/20 rounded-lg bg-white/5 backdrop-blur-md p-4">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-semibold text-lg bg-linear-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">Vax-Portal</p>
                    <a
                      href="https://github.com/Theekshana-Jayalath/E-Commerce-Website"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Vax-Portal GitHub"
                      className="shrink-0 inline-flex items-center justify-center rounded-full p-2 text-white/80 hover:text-purple-400 focus-visible:text-purple-400 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50"
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs">
                    <span className="border border-white/20 rounded-md px-2 py-1">HTML</span>
                    <span className="border border-white/20 rounded-md px-2 py-1">CSS</span>
                    <span className="border border-white/20 rounded-md px-2 py-1">PHP</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Desktop/Tablet stacked sticky (hidden on phones) */}
            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-10 hidden md:block" aria-hidden>
              {/* Each project lives in a tall wrapper; the card inside is sticky and pins as you scroll */}

              {/* Zenny */}
        <div className="relative h-[120vh] sm:h-[130vh] lg:h-[140vh]">
                <motion.div
          className="sticky top-16 sm:top-24 md:top-28 w-full p-4 sm:p-6 border border-white/20 rounded-lg bg-white/5 backdrop-blur-md shadow-lg transform-gpu"
                  initial={{ y: 20, opacity: 0.95, scale: 0.98 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  viewport={{ amount: 0.6, once: false }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  style={{ zIndex: 13 }}
                >
                  <p className="text-center font-bold text-2xl bg-linear-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">Zenny - A Zen Meditation App</p>
                  <br />
                  <Image src={zenny} alt="Zenny Project" width={400} height={400} className="relative mx-auto w-full max-w-md bg-linear-to-b" />
                  <br />
                  <p className="text-center text-gray-300">
                    Zenny is a user-friendly Android application developed using Kotlin and Android Studio,
                    with Room Database for efficient local data management.
                  </p>
                  <br />
                  <ul className="flex items-center justify-center gap-5 text-gray-300">
                    <li>
                      <a
                        href="https://github.com/Theekshana-Jayalath/ZennyRoomDB"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full p-2 text-white/70 hover:text-purple-400 focus-visible:text-purple-400 active:text-purple-400 transition transform hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50"
                      >
                        <FaGithub className="text-4xl" />
                      </a>
                    </li>
                    <li className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">Android Studio</li>
                    <li className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">Kotlin</li>
                    <li className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">Room Database</li>
                  </ul>
                </motion.div>
              </div>

              {/* Fabric Flow */}
        <div className="relative h-[120vh] sm:h-[130vh] lg:h-[140vh]">
                <motion.div
          className="sticky top-16 sm:top-24 md:top-28 w-full p-4 sm:p-6 border border-white/20 rounded-lg bg-white/5 backdrop-blur-md shadow-lg transform-gpu"
                  initial={{ y: 20, opacity: 0.95, scale: 0.98 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  viewport={{ amount: 0.6, once: false }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  style={{ zIndex: 14 }}
                >
                  <p className="text-center font-bold text-2xl bg-linear-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">Fabric Flow</p>
                  <br />
                  <Image src={FF} alt="Fabric Flow" width={950} height={650} className="relative mx-auto w-full max-w-lg md:max-w-2xl bg-linear-to-b" />
                  <br />
                  <p className="text-center text-gray-300">
                    Fabric Flow is a MERN stack web application developed using MongoDB, Express.js,
                    React, and Node.js, designed to manage and streamline fabric and apparel-related workflows efficiently.
                  </p>
                  <br />
                  <ul className="flex items-center justify-center gap-5 text-gray-300">
                    <li>
                      <a
                        href="https://github.com/Theekshana-Jayalath/FabricFlow-frontend"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full p-2 text-white/70 hover:text-purple-400 focus-visible:text-purple-400 active:text-purple-400 transition transform hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50"
                      >
                        <FaGithub className="text-4xl" />
                      </a>
                    </li>
                    <li className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">React</li>
                    <li className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">Node.js</li>
                    <li className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">MongoDB</li>
                  </ul>
                </motion.div>
              </div>

              {/* GlitchZone */}
        <div className="relative h-[120vh] sm:h-[130vh] lg:h-[140vh]">
                <motion.div
          className="sticky top-16 sm:top-24 md:top-28 w-full p-4 sm:p-6 border border-white/20 rounded-lg bg-white/5 backdrop-blur-md shadow-lg transform-gpu"
                  initial={{ y: 20, opacity: 0.95, scale: 0.98 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  viewport={{ amount: 0.6, once: false }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  style={{ zIndex: 15 }}
                >
                  <p className="text-center font-bold text-2xl bg-linear-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">GlitchZone Gaming</p>
                  <br />
                  <Image src={GG} alt="GlitchZone Gaming" width={400} height={400} className="relative mx-auto w-full max-w-md bg-linear-to-b" />
                  <br />
                  <p className="text-center text-gray-300">
                    GlitchZone-Gaming is a web-based gaming platform developed using JavaScript,
                    featuring an interactive and user-friendly interface for browsing and exploring games.
                  </p>
                  <br />
                  <ul className="flex items-center justify-center gap-5 text-gray-300">
                    <li>
                      <a
                        href="https://github.com/Theekshana-Jayalath/GlitchZone-Gaming"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full p-2 text-white/70 hover:text-purple-400 focus-visible:text-purple-400 active:text-purple-400 transition transform hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50"
                      >
                        <FaGithub className="text-4xl" />
                      </a>
                    </li>
                    <li className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">HTML</li>
                    <li className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">CSS</li>
                    <li className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">JavaScript</li>
                  </ul>
                </motion.div>
              </div>

              {/* Vax Portal */}
        <div className="relative h-[120vh] sm:h-[130vh] lg:h-[140vh]">
                <motion.div
          className="sticky top-16 sm:top-24 md:top-28 w-full p-4 sm:p-6 border border-white/20 rounded-lg bg-white/5 backdrop-blur-md shadow-lg transform-gpu"
                  initial={{ y: 20, opacity: 0.95, scale: 0.98 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  viewport={{ amount: 0.6, once: false }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  style={{ zIndex: 16 }}
                >
                  <p className="text-center font-bold text-2xl bg-linear-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">Vax-Portal</p>
                  <br />
                  <Image src={VP} alt="About Me" width={400} height={400} className="relative mx-auto w-full max-w-md bg-linear-to-b" />
                  <br />
                  <p className="text-center text-gray-300">
                    Vax Portal is a web-based application developed using HTML, CSS, and PHP,
                    designed to manage vaccine registrations and related information efficiently.
                  </p>
                  <br />
                  <ul className="flex items-center justify-center gap-5 text-gray-300">
                    <li>
                      <a
                        href="https://github.com/Theekshana-Jayalath/E-Commerce-Website"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full p-2 text-white/70 hover:text-purple-400 focus-visible:text-purple-400 active:text-purple-400 transition transform hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50"
                      >
                        <FaGithub className="text-4xl" />
                      </a>
                    </li>
                    <li className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">HTML</li>
                    <li className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">CSS</li>
                    <li className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">PHP</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="Contact"
          className="min-h-screen py-32 scroll-mt-20
                     bg-linear-to-b from-[#0b1020] via-[#0e1530] to-[#0a0f25]"
        >
            <div className="flex flex-col items-center justify-center gap-10 mt-12">

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
                </p>
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
