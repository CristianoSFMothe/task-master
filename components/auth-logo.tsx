import Image from "next/image";

import icon from "@/app/assets/task-manage-icon.svg";
import { cn } from "@/lib/utils";

interface AuthLogoProps {
  /**
   * 'light': Texto branco (para fundos escuros).
   * 'dark': Texto escuro com ícone em box roxo (para fundos claros).
   */
  theme?: "light" | "dark";
  className?: string;
}

export function AuthLogo({ theme = "light", className }: AuthLogoProps) {
  const isDarkTheme = theme === "dark";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {isDarkTheme ? (
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-700 shadow-md">
          <Image
            src={icon}
            width={28}
            height={28}
            alt="TaskMaster Icon"
            quality={100}
          />
        </div>
      ) : (
        <Image
          src={icon}
          width={48}
          height={48}
          alt="TaskMaster Icon"
          priority
          quality={100}
        />
      )}

      <h1
        className={cn(
          "font-roboto font-bold",
          isDarkTheme
            ? "text-3xl text-slate-900"
            : "text-3xl text-white lg:text-5xl",
        )}
      >
        TaskMaster
      </h1>
    </div>
  );
}
