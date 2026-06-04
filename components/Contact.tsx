"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import Typewriter from "./Typewriter";

interface ContactProps {
  contactAnimKey: number;
}

export default function Contact({ contactAnimKey }: ContactProps) {
  const socialLinks = [
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/_t_k__g_i_r_l_?igsh=MTRzcnJqZWd2ejh4bw==",
      label: "Instagram",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/theekshana-jayalath/",
      label: "LinkedIn",
    },
    {
      icon: FaGithub,
      href: "https://github.com/Theekshana-Jayalath",
      label: "GitHub",
    },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/share/17m1auNH9d/",
      label: "Facebook",
    },
  ];

  return (
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
          </p>
          <br />

          <p className="text-gray-300">
            Got an idea, a project in mind, or just want to connect?
            <br />
            I'm always excited to explore new opportunities and creative
            conversations.
            <br />
            Drop a message anytime — I'd love to hear from you!
          </p>

          <br />

          <div className="space-y-4">
            <ContactInfo label="Email" value="theekshanapabodi2001@gmail.com" type="email" />
            <ContactInfo label="Phone" value="+94 76 573 8311" type="phone" />
          </div>

          <br />

          <p className="text-gray-300 text-xl">You can also find me on:</p>

          <ul className="flex items-center justify-center gap-5 mt-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center rounded-full p-2 text-white/70 hover:text-purple-400 focus-visible:text-purple-400 active:text-purple-400 transition transform hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50"
                  >
                    <Icon className="text-3xl" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

interface ContactInfoProps {
  label: string;
  value: string;
  type: "email" | "phone";
}

function ContactInfo({ label, value, type }: ContactInfoProps) {
  const href = type === "email" ? `mailto:${value}` : `tel:${value}`;

  return (
    <div>
      <p className="text-xl text-purple-300">{label}</p>
      <p className="text-gray-300">
        <a
          href={href}
          className="text-white hover:text-blue-400 hover:underline focus:text-white focus:no-underline focus:outline-none focus-visible:text-blue-400 focus-visible:underline"
        >
          {value}
        </a>
      </p>
    </div>
  );
}
