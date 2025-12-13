"use client";

import { Layout, Menu, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

type DropdownMenuDashboardProps = {
  buttonVariant?: "ghost" | "outline";
  buttonClassName?: string;
};

export default function DropdownMenuDashboard({
  buttonVariant = "ghost",
  buttonClassName,
}: DropdownMenuDashboardProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={buttonVariant}
          size="icon"
          className={cn("text-slate-900 hover:bg-slate-100", buttonClassName)}
        >
          <Menu size={28} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem
          className={cn(
            "mb-1 cursor-pointer bg-[#483DCA]",
            "text-white focus:bg-[#483DCA] focus:text-white",
          )}
        >
          <Layout className="mr-2 h-4 w-4" />
          <span>Dashboard</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          className={cn(
            "mb-1 cursor-pointer bg-[#483DCA]",
            "text-white focus:bg-[#483DCA] focus:text-white",
          )}
        >
          <User className="mr-2 h-4 w-4" />
          <span>Perfil</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
