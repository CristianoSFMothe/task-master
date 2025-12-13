"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

import DialogDashboard from "./dialog-dashboard";
import DropdownMenuDashboard from "./dropdown-menu-dashboard";
import Logo from "./logo";

const DashboardHeader = () => {
  return (
    <header className="mb-8 flex flex-col gap-6">
      <div className="flex w-full items-center justify-between lg:hidden">
        <Logo theme="light" />
        <DropdownMenuDashboard buttonClassName="-mr-2" />
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="font-roboto text-3xl font-bold md:text-4xl">
          Visão Geral
        </h1>

        <nav className="flex w-full flex-col gap-3 sm:flex-row sm:items-center md:w-auto md:justify-end">
          <div className="relative w-full sm:flex-1 md:max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Buscar tarefas..."
              className="h-10 w-full border-slate-300 bg-white pl-10 focus-visible:ring-indigo-600"
            />
          </div>

          <DialogDashboard />
        </nav>
      </div>
    </header>
  );
};

export default DashboardHeader;
