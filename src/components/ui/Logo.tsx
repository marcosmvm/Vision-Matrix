"use client";

import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const sizes = {
    sm: { vm: "text-2xl", text: "text-[10px]" },
    md: { vm: "text-4xl", text: "text-xs" },
    lg: { vm: "text-6xl", text: "text-sm" },
  };

  return (
    <Link href="/" className={`flex flex-col items-center ${className}`}>
      {/* VM Logo Mark */}
      <div className={`font-black ${sizes[size].vm} leading-none tracking-tight`}>
        <span className="text-gradient-blue">V</span>
        <span className="text-gradient-blue">M</span>
      </div>
      {/* Vision Matrix Text */}
      <div
        className={`${sizes[size].text} font-semibold tracking-[0.3em] text-white uppercase mt-1`}
      >
        Vision Matrix
      </div>
    </Link>
  );
}
