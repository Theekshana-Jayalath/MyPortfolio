"use client";
import { GoMoveToTop } from "react-icons/go";

interface GoToTopProps {
  show: boolean;
}

export default function GoToTop({ show }: GoToTopProps) {
  if (!show) return null;

  const handleClick = () => {
    const el = document.getElementById("Home");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button
      aria-label="Go to Top"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 rounded-full p-3 shadow-lg border border-white/20 bg-linear-to-r from-[#260c35] via-[#3a1a4b] to-[#4b2160] text-white hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50"
    >
      <GoMoveToTop className="text-xl" />
    </button>
  );
}
