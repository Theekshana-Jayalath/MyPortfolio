"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

const certificates = [
  {
    title: "Professional Development Certificate",
    issuer: "Add your certificate issuer",
    date: "2024",
    description: "Add your certificate description here",
  },
  {
    title: "Your Certificate Title",
    issuer: "Issuing Organization",
    date: "2024",
    description: "Add your certificate description here",
  },
  {
    title: "Another Achievement",
    issuer: "Organization Name",
    date: "2024",
    description: "Add your certificate description here",
  },
];

export default function Certificates() {
  return (
    <section
      id="Certificates"
      className="min-h-screen py-32 scroll-mt-20
                 bg-gradient-to-b from-[#0b1020] via-[#0e1530] to-[#0a0f25]"
    >
      <div>
        <h2
          className="text-6xl py-2 font-bold text-center
                     bg-gradient-to-b from-[#7717ae] via-[#b64dea] to-[#c596d8]
                     bg-clip-text text-transparent"
        >
          Achievements
        </h2>

        <div className="mt-16 max-w-4xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="space-y-6">
            {certificates.map((cert, idx) => (
              <CertificateCard key={idx} certificate={cert} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface CertificateCardProps {
  certificate: (typeof certificates)[0];
  index: number;
}

function CertificateCard({ certificate, index }: CertificateCardProps) {
  return (
    <motion.div
      className="group border border-white/20 rounded-2xl bg-white/5 backdrop-blur-md p-6 shadow-lg transition-all duration-300 ease-out hover:shadow-2xl hover:bg-white/10"
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18,
        delay: index * 0.1,
      }}
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 p-3 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10">
          <FaAward className="text-2xl text-purple-400" />
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-lg md:text-xl bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent mb-1">
            {certificate.title}
          </h3>

          <p className="text-sm text-purple-300 font-medium mb-2">
            {certificate.issuer}
          </p>

          <p className="text-sm text-gray-300 mb-3">{certificate.description}</p>

          <div className="flex items-center gap-2">
            <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
              {certificate.date}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
