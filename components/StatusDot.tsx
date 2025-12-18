"use client";
import React from "react";
import { motion } from "framer-motion";

/**
 * StatusDot
 * Reusable animated availability indicator.
 * - Green circular dot
 * - Soft pulsing (opacity + scale)
 * - Subtle glowing box-shadow
 */
export type StatusDotProps = {
  className?: string;
  size?: number; // pixel size of the dot
};

const StatusDot: React.FC<StatusDotProps> = ({ className = "", size = 10 }) => {
  const style: React.CSSProperties = {
    width: size,
    height: size,
    boxShadow: "0 0 0.5rem rgba(34,197,94,0.7)", // green glow
  };

  return (
    <motion.span
      aria-hidden
      className={`inline-block rounded-full bg-green-500 ${className}`}
      style={style}
      initial={{ opacity: 0.8, scale: 1 }}
      animate={{ opacity: [0.8, 0.35, 0.8], scale: [1, 0.9, 1] }}
      transition={{ duration: 0.1, ease: "easeInOut", repeat: Infinity }}
    />
  );
};

export default StatusDot;
