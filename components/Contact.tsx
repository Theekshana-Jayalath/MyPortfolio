"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaHome, FaMapPin } from "react-icons/fa";
import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebookF, FaMedium } from "react-icons/fa";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        console.error("Contact API error:", data.error);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (err) {
      console.error("Form submission failed:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const contactDetails = [
    {
      icon: FaEnvelope,
      label: "Email Me",
      value: "theekshanapabodi2001@gmail.com",
      href: "mailto:theekshanapabodi2001@gmail.com",
      color: "text-pink-400 border-pink-500/10",
    },
    {
      icon: FaPhone,
      label: "Call Me",
      value: "+94 76 573 8311",
      href: "tel:+94765738311",
      color: "text-purple-400 border-purple-500/10",
    },
    {
      icon: FaHome,
      label: "Hometown",
      value: "Mahiyangana, Sri Lanka",
      href: "https://maps.google.com/?q=Mahiyangana,Sri+Lanka",
      color: "text-fuchsia-400 border-fuchsia-500/10",
    },
    {
      icon: FaMapPin,
      label: "Live Location",
      value: "Malabe, Sri Lanka",
      href: "https://maps.google.com/?q=Malabe,Sri+Lanka",
      color: "text-violet-400 border-violet-500/10",
    },
  ];

  const socialLinks = [
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/theekshana-jayalath/", label: "LinkedIn", color: "hover:bg-[#0077B5]" },
    { icon: FaGithub, href: "https://github.com/Theekshana-Jayalath", label: "GitHub", color: "hover:bg-[#24292e]" },
    { icon: FaInstagram, href: "https://www.instagram.com/_t_k__g_i_r_l_?igsh=MTRzcnJqZWd2ejh4bw==", label: "Instagram", color: "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]" },
    { icon: FaFacebookF, href: "https://www.facebook.com/share/17m1auNH9d/", label: "Facebook", color: "hover:bg-[#1877F2]" },
    { icon: FaMedium, href: "https://medium.com/@theekshanapabodi2001", label: "Medium", color: "hover:bg-[#00ab6c]" },
  ];

  return (
    <section id="Contact" className="relative py-24 sm:py-32 scroll-mt-20 overflow-hidden">
      {/* Background glow circle */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-pink-900/5 rounded-full blur-[150px] pointer-events-none -z-10 animate-pulse duration-8000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h4 className="text-xs uppercase tracking-widest text-pink-400 font-semibold mb-2">
            Get In Touch
          </h4>
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-4 w-20 mb-8" />
          
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Let's construct something awesome!
            </h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-light">
              Whether you have an interesting job proposal, want to discuss a project, or just want to connect, feel free to send a message. I am always open to new connections.
            </p>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

          {/* LEFT: Details & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div className="space-y-4">
              {/* Direct Details Cards */}
              <div className="space-y-4">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;
                  return (
                    <a
                      key={detail.label}
                      href={detail.href}
                      target={detail.href.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 ${detail.color}`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <Icon className="text-base" />
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                          {detail.label}
                        </span>
                        <span className="text-sm text-white group-hover:underline font-medium">
                          {detail.value}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 space-y-3 text-center flex flex-col items-center justify-center">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
                Network profiles
              </p>
              <div className="flex gap-4 justify-center">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="text-sm" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: Glassmorphic Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel-glow p-6 sm:p-8 rounded-3xl border border-white/15 relative overflow-hidden"
            >
              {/* Backglow gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2A0055]/20 to-[#8B005D]/10 pointer-events-none -z-10" />

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase text-gray-400 tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-pink-500/40 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-pink-500/30 transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase text-gray-400 tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-pink-500/40 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-pink-500/30 transition-all duration-300"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase text-gray-400 tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                    placeholder="Type your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-pink-500/40 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-pink-500/30 transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "sending" || status === "success"}
                  className="w-full py-4 rounded-xl text-xs font-extrabold tracking-widest uppercase bg-gradient-to-r from-[#2A0055] via-purple-600 to-[#8B005D] text-white flex items-center justify-center gap-2.5 transition-all duration-300 hover:opacity-95 disabled:opacity-70 shadow-lg shadow-purple-950/40"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : status === "success" ? (
                    "Message Sent Successfully!"
                  ) : (
                    <>
                      <FaPaperPlane className="text-[10px]" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Alert message display */}
                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs font-semibold text-center text-green-400 pt-1"
                  >
                    Thank you! Your message has been sent successfully. I will get back to you soon.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs font-semibold text-center text-red-400 pt-1"
                  >
                    Failed to send message. Please set up the SMTP credentials in your .env.local file.
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
