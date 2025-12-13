"use client";

import {
  Circle,
  Clock,
  Filter,
  LayoutDashboard,
  PauseCircle,
  StopCircle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Filters = () => {
  return (
    <div className="mt-8">
      {/* MOBILE */}
      <div className="w-full xl:hidden">
        <Button
          variant="outline"
          className="h-11 w-full justify-between border-slate-300 bg-white text-slate-700"
        >
          <span className="flex items-center gap-2 font-medium">
            <Filter size={18} />
            Filtrar Tarefas
          </span>
          <Badge className="bg-[#483DCA] text-white">Todos</Badge>
        </Button>
      </div>

      {/* DESKTOP */}
      <div className="hidden flex-wrap items-center gap-4 xl:flex">
        <Button className="h-10 gap-2 bg-[#483DCA] hover:bg-[#483DCA]/90">
          <LayoutDashboard size={18} />
          Atividade [Visão Geral]
          <Badge className="h-5 min-w-5 rounded-full bg-[#448AFF] px-1 font-mono">
            8
          </Badge>
        </Button>

        <Button variant="outline" className="h-10 gap-2">
          <Circle size={18} />A Fazer
          <Badge className="h-5 min-w-5 rounded-full bg-[#CECECE] px-1 text-black">
            8
          </Badge>
        </Button>

        <Button variant="outline" className="h-10 gap-2">
          <Clock size={18} />
          Em Andamento
          <Badge className="h-5 min-w-5 rounded-full bg-[#CECECE] px-1 text-black">
            8
          </Badge>
        </Button>

        <Button variant="outline" className="h-10 gap-2">
          <PauseCircle size={18} />
          Pausadas
          <Badge className="h-5 min-w-5 rounded-full bg-[#CECECE] px-1 text-black">
            8
          </Badge>
        </Button>

        <Button variant="outline" className="h-10 gap-2">
          <StopCircle size={18} />
          Concluídas
          <Badge className="h-5 min-w-5 rounded-full bg-[#CECECE] px-1 text-black">
            8
          </Badge>
        </Button>
      </div>
    </div>
  );
};

export default Filters;
