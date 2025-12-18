"use client";
import React from "react";
import { motion } from "framer-motion";

type TypewriterProps = {
  parts: Array<
    | { text: string; className?: string }
  >;
  speedMs?: number; // time per character
  cursor?: boolean;
  delayMs?: number; // base delay before starting the typing
  className?: string;
};

// Animates text appearing letter-by-letter. Accepts multiple parts to style segments differently.
const Typewriter: React.FC<TypewriterProps> = ({
  parts,
  speedMs = 50,
  cursor = false,
  delayMs = 0,
  className = "",
}) => {
  // Build a single string and map part indices to ranges
  const fullText = parts.map(p => p.text).join("");
  const charVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({ opacity: 1, transition: { delay: (delayMs / 1000) + i * (speedMs / 1000) } }),
  };

  // precompute indexes where each part starts
  const partRanges: { start: number; end: number; className?: string }[] = [];
  let cursorIndex = 0;
  for (const p of parts) {
    const start = cursorIndex;
    const end = cursorIndex + p.text.length;
    partRanges.push({ start, end, className: p.className });
    cursorIndex = end;
  }

  const getClassForIndex = (idx: number) => {
    const range = partRanges.find(r => idx >= r.start && idx < r.end);
    return range?.className || undefined;
  };

  return (
    <span className={className} aria-label={fullText}>
      {fullText.split("").map((ch, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={charVariants}
          className={getClassForIndex(i)}
        >
          {ch}
        </motion.span>
      ))}
      {cursor && (
        <motion.span
          aria-hidden
          className="inline-block ml-1 w-px h-[1em] align-[-0.15em] bg-white"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.9, ease: "easeInOut", repeat: Infinity }}
        />
      )}
    </span>
  );
};

export default Typewriter;
