"use client";
import { GoMoveToTop } from "react-icons/go";

interface GoToTopProps {
  show: boolean;
}

export default function GoToTop({ show }: GoToTopProps) {
  if (!show) return null;

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      aria-label="Go to Top"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 rounded-full p-3 shadow-lg border border-white/10 bg-gradient-to-r from-[#2A0055] via-[#6A0DAD] to-[#8B005D] text-white hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/50 cursor-pointer"
    >
      <GoMoveToTop className="text-xl" />
    </button>
  );
}

