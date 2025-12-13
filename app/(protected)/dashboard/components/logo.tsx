"use client";

import Image from "next/image";
import React from "react";

import icon from "@/app/assets/task-manage-icon.svg";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  theme?: "light" | "dark";
}

const Logo = ({ className, theme = "light" }: LogoProps) => {
  const isDark = theme === "dark";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "flex items-center justify-center transition-transform hover:scale-105",
          !isDark && "h-12 w-12 rounded-xl bg-indigo-700 shadow-md",
          isDark && "bg-transparent",
        )}
      >
        <Image
          src={icon}
          width={32}
          height={32}
          alt="TaskMaster Icon"
          quality={100}
          priority
          unoptimized
          className="h-8 w-8 object-contain"
        />
      </div>

      {/* Texto */}
      <h1
        className={cn(
          "font-roboto text-2xl font-bold tracking-tight",
          isDark ? "text-white" : "text-slate-900",
        )}
      >
        TaskMaster
      </h1>
    </div>
  );
};

export default Logo;
