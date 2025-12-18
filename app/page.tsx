"use client";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

import profileImage from "../public/assests/AM.png";
import zenny from "../public/assests/p1.png";
import profileImage1 from "../public/assests/my1..png";

import { IoIosMoon } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import StatusDot from "../components/StatusDot";
import Typewriter from "../components/Typewriter";

export default function Home() {
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
          {/* Navigation */}
          <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 py-5">
            <ul
              className="flex items-center gap-10 text-sm md:text-base
                         px-6 py-2 rounded-full
                         border border-white/20
                         bg-black/20 backdrop-blur-md"
            >
              <li><a href="#Home" className="hover:text-purple-400">Home</a></li>
              <li><a href="#About" className="hover:text-purple-400">About</a></li>
              <li><a href="#Projects" className="hover:text-purple-400">Projects</a></li>
              <li><a href="#Contact" className="hover:text-purple-400">Contact</a></li>
            </ul>
          </nav>

          {/* Hero Content */}
          <div className="container mx-auto px-2 min-h-[calc(100vh-5rem)] flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
              {/* LEFT – Text */}
              <div className="space-y-5 text-center order-2 md:order-1 mt-2 md:mt-8">
                <h1 className="text-7xl md:text-6xl font-bold">
          <Typewriter
                    parts={[
                      { text: "Hi, I’m " },
            { text: "Theekshana", className: "bg-linear-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent" },
                    ]}
                    speedMs={55}
                    cursor={false}
                  />
                </h1>

        <h2 className="text-3xl">
                  <Typewriter
                    parts={[
          { text: "Software Engineer", className: "bg-linear-to-r from-purple-800 via-fuchsia-800 to-pink-700 bg-clip-text text-transparent" },
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
                <motion.div
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
          <div className="max-w-7xl mx-auto px-10">
            <h2
              className="text-6xl py-2 font-bold text-center
                         bg-linear-to-b from-[#7717ae] via-[#b64dea] to-[#c596d8]
                         bg-clip-text text-transparent"
            >
              About Me
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
                className="text-gray-300 space-y-8"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
              >
                <p className="text-lg leading-relaxed">
                  I’m a Software Engineering undergraduate atSLIIT
                  with a strong passion for full-stack web development. I enjoy building modern,
                  responsive, and user-friendly applications that balance performance with design.
                </p>

                <p className="text-lg leading-relaxed">
                  My journey began during my university years, where curiosity quickly turned into
                  passion. I enjoy learning new technologies, experimenting with features, and
                  improving my skills through hands-on projects.
                </p>

                <p className="text-lg leading-relaxed">
                  Driven by continuous learning, my goal is to contribute to meaningful projects
                  and grow into a developer who creates impactful digital solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 shadow-lg max-w-md mx-auto">
                    <h3 className="text-purple-800 font-semibold mb-4 text-xl">Skills</h3>
                    <div className="flex flex-wrap gap-3 mb-5">
                      <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">HTML</span>
                      <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">CSS</span>
                      <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">PHP</span>
                      <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">C++</span>
                      <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">C</span>
                      <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">MySQL</span>
                      <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">MongoDB</span>
                      <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">React</span>
                      <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">Node.js</span>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 shadow-lg max-w-md mx-auto">
                    <h3 className="text-purple-800 font-semibold mb-3 text-xl">Hobbies</h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">Athletics</span>
                      <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">Dancing</span>
                      <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">Reading</span>
                      <span className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">Traveling</span>
                    </div>
                  </div>
                </div>

              </motion.div>
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
              Projects
            </h2>

            <br /><br /><br />

            <div className="grid grid-cols-1 gap-6 max-w-7xl mx-auto px-10">

              {/* Zenny */}
              <div className="w-full p-6 border border-white/20 rounded-lg">
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
                    <a href="https://github.com/Theekshana-Jayalath/ZennyRoomDB" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="text-4xl cursor-pointer" />
                    </a>
                  </li>
                  <li className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">Android Studio</li>
                  <li className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">Kotlin</li>
                  <li className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">Room Database</li>
                </ul>
              </div>

              {/* Fabric Flow */}
              <div className="w-full p-6 border border-white/20 rounded-lg">
                <p className="text-center font-bold text-2xl bg-linear-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">Fabric Flow</p>
                <br />
                <Image src={zenny} alt="About Me" width={400} height={400} className="relative mx-auto w-full max-w-md bg-linear-to-b" />
                <br />
                <p className="text-center text-gray-300">
                  Fabric Flow is a MERN stack web application developed using MongoDB, Express.js,
                  React, and Node.js, designed to manage and streamline fabric and apparel-related workflows efficiently.
                </p>
                <br />
                <ul className="flex items-center justify-center gap-5 text-gray-300">
                  <li>
                    <a href="https://github.com/Theekshana-Jayalath/FabricFlow-frontend" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="text-4xl cursor-pointer" />
                    </a>
                  </li>
                  <li className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">React</li>
                  <li className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">Node.js</li>
                  <li className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">MongoDB</li>
                </ul>
              </div>

              {/* GlitchZone */}
              <div className="w-full p-6 border border-white/20 rounded-lg">
                <p className="text-center font-bold text-2xl bg-linear-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">GlitchZone Gaming</p>
                <br />
                <Image src={zenny} alt="About Me" width={400} height={400} className="relative mx-auto w-full max-w-md bg-linear-to-b" />
                <br />
                <p className="text-center text-gray-300">
                  GlitchZone-Gaming is a web-based gaming platform developed using JavaScript,
                  featuring an interactive and user-friendly interface for browsing and exploring games.
                </p>
                <br />
                <ul className="flex items-center justify-center gap-5 text-gray-300">
                  <li>
                    <a href="https://github.com/Theekshana-Jayalath/GlitchZone-Gaming" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="text-4xl cursor-pointer" />
                    </a>
                  </li>
                  <li className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">HTML</li>
                  <li className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">CSS</li>
                  <li className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">JavaScript</li>
                </ul>
              </div>

              {/* Vax Portal */}
              <div className="w-full p-6 border border-white/20 rounded-lg">
                <p className="text-center font-bold text-2xl bg-linear-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">Vax-Portal</p>
                <br />
                <Image src={zenny} alt="About Me" width={400} height={400} className="relative mx-auto w-full max-w-md bg-linear-to-b" />
                <br />
                <p className="text-center text-gray-300">
                  Vax Portal is a web-based application developed using HTML, CSS, and PHP,
                  designed to manage vaccine registrations and related information efficiently.
                </p>
                <br />
                <ul className="flex items-center justify-center gap-5 text-gray-300">
                  <li>
                    <a href="https://github.com/Theekshana-Jayalath/E-Commerce-Website" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="text-4xl cursor-pointer" />
                    </a>
                  </li>
                  <li className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">HTML</li>
                  <li className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">CSS</li>
                  <li className="inline-block border border-white/20 rounded-lg px-4 py-2 bg-transparent">PHP</li>
                </ul>
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
          <div className="max-w-7xl mx-auto py-5 px-5">
            <h2
              className="text-6xl py-2 font-bold text-center
                         bg-linear-to-b from-[#7717ae] via-[#b64dea] to-[#c596d8]
                         bg-clip-text text-transparent"
            >
              Contact Me
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">

              <div className="flex-1 text-center md:text-left">
                <p className="text-4xl text-white mb-4">Let's connect!</p>
                <p className="text-gray-300">
                  Got an idea, a project in mind, or just want to connect?<br />
                  I’m always excited to explore new opportunities and creative conversations.<br />
                  Drop a message anytime — I’d love to hear from you!
                </p>

                <br />
                <p>Email</p>
                <p className="text-gray-300">
                  <a href="mailto:theekshanapabodi2001@gmail.com">theekshanapabodi2001@gmail.com</a>
                </p>

                <br />
                <p>Phone</p>
                <p className="text-gray-300">
                  <a href="tel:+94765738311">+94 76 573 8311</a>
                </p>

                <br />
                <p className="text-gray-300">You can also find me on:</p>

                <ul className="flex items-center gap-5 justify-center md:justify-start mt-4">
                  <li><FaInstagram className="text-4xl cursor-pointer" /></li>
                  <li><FaLinkedin className="text-4xl cursor-pointer" /></li>
                  <li><FaGithub className="text-4xl cursor-pointer" /></li>
                </ul>
              </div>

              <div className="flex-1 w-full max-w-md border border-white/20 rounded-lg p-6 bg-transparent">
                <p className="text-white text-lg mb-4">Get In Touch</p>

                <form
                  action="https://formspree.io/f/mayvlrze"
                  method="POST"
                  className="flex flex-col gap-4"
                >
                  <input type="text" name="name" placeholder="Your Name" className="p-2 rounded-md border border-white/20 bg-transparent text-white" />
                  <input type="email" name="email" placeholder="Your Email" className="p-2 rounded-md border border-white/20 bg-transparent text-white" />
                  <textarea name="message" placeholder="Your Message" rows={5} className="p-2 rounded-md border border-white/20 bg-transparent text-white" />

                  <button
                    type="submit"
                    className="bg-linear-to-r from-[#260c35] via-[#3a1a4b] to-[#4b2160]
                               text-white px-4 py-2 rounded-md w-32 mx-auto"
                  >
                    Send
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 py-6 text-center text-gray-400 text-sm">
          © 2025 Theekshana Jayalath. All rights reserved.
        </footer>

      </main>
    </div>
  );
}
