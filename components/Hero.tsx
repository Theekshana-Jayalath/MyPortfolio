"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoMdDownload } from "react-icons/io";
import StatusDot from "./StatusDot";
import Typewriter from "./Typewriter";

interface HeroProps {
  homeAnimKey: number;
}

export default function Hero({ homeAnimKey }: HeroProps) {
  return (
    <section
      id="Home"
      className="min-h-screen scroll-mt-20 
                 bg-linear-to-b from-[#0b1020] via-[#0e1530] to-[#0a0f25]
                 text-white"
    >
      <div className="container mx-auto px-2 min-h-[calc(100vh-5rem)] flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
          {/* LEFT – Text */}
          <div className="space-y-5 text-center order-2 md:order-1 mt-2 md:mt-8">
            <h1 className="text-7xl md:text-6xl font-bold" key={homeAnimKey}>
              <Typewriter
                parts={[
                  { text: "Hi, I'm " },
                  {
                    text: "Theekshana",
                    className:
                      "bg-linear-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent text-5xl sm:text-6xl md:text-6xl lg:text-7xl",
                  },
                ]}
                speedMs={55}
                cursor={false}
              />
            </h1>

            <h2 className="text-3xl" key={`sub-${homeAnimKey}`}>
              <Typewriter
                parts={[
                  {
                    text: "Full-Stack Developer",
                    className:
                      "bg-linear-to-r from-purple-800 via-fuchsia-800 to-pink-700 bg-clip-text text-transparent",
                  },
                ]}
                speedMs={55}
                delayMs={55 * "Hi, I'm Theekshana".length}
                cursor={false}
              />
            </h2>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 text-green-400 w-fit whitespace-nowrap">
              <StatusDot size={10} />
              <span className="text-sm md:text-base">
                Available for new projects
              </span>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4 justify-center">
              <a
                href="https://drive.google.com/file/d/148EpXV4vjCd0RIVrZkCJrQDJxe76611p/view?usp=sharing"
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
            <motion.div
              key={`img-${homeAnimKey}`}
              className="relative flex justify-center"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 120,
                damping: 16,
              }}
            >
              <div
                className="absolute w-72 h-72 md:w-110 md:h-150
                           bg-linear-to-r from-pink-500 to-purple-500
                           rounded-full blur-3xl opacity-40"
              />

              <Image
                src="/assests/my1..png"
                alt="Profile"
                width={550}
                height={700}
                className="relative z-10 object-cover rounded-xl w-auto h-auto max-w-full"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
