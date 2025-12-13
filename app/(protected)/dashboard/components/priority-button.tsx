"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PriorityButtonProps = {
  label: string;
  icon?: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
};

const PriorityButton = ({
  label,
  icon,
  isActive = false,
  onClick,
}: PriorityButtonProps) => {
  return (
    <Button
      type="button"
      onClick={onClick}
      variant="outline"
      className={cn(
        "flex h-10 items-center justify-center gap-2",
        "transition-all",

        // ESTILO PADRÃO
        "border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900",

        // ESTILO ATIVO
        isActive &&
          "border border-[#2F54EB] bg-[#A6C5FF] font-semibold text-[#2F54EB] hover:bg-[#A6C5FF]/90",
      )}
    >
      {icon}
      {label}
    </Button>
  );
};

export default PriorityButton;
