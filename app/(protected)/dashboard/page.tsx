import {
  Circle,
  Clock,
  Layout,
  LayoutDashboard,
  PauseCircle,
  Plus,
  Search,
  StopCircle,
  User,
} from "lucide-react";
import Image from "next/image";

import icon from "@/app/assets/task-manage-icon.svg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

function Dashboard() {
  return (
    <main className="flex min-h-screen w-full">
      <aside className="flex w-72 flex-col bg-[#0F172A] px-6 py-8 text-white">
        <div className="mb-10 flex items-center gap-3">
          <Image
            src={icon}
            width={32}
            height={32}
            alt="TaskMaster Icon"
            quality={100}
            unoptimized // Ajuda com SVGs locais
          />
          <h1
            className={cn(
              "font-roboto font-bold",
              "text-3xl text-white lg:text-2xl",
            )}
          >
            TaskMaster
          </h1>
        </div>

        <div className="flex flex-col gap-3">
          <Button
            className={cn(
              "flex w-full items-center justify-start gap-2",
              "bg-[#483DCA] text-lg hover:bg-[#483DCA]/90",
            )}
          >
            <Layout className="mr-2" size={24} />
            Dashboard
          </Button>

          <Button
            className={cn(
              "flex w-full items-center justify-start gap-2",
              "bg-[#483DCA] text-lg hover:bg-[#483DCA]/90",
            )}
          >
            <User className="mr-2" size={24} />
            Perfil
          </Button>
        </div>
      </aside>

      <section className="h-full min-h-screen w-full bg-gray-300 px-6 py-8 text-slate-900">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="font-roboto text-4xl font-bold text-slate-900">
              Visão Geral
            </h1>
          </div>

          <nav className="flex items-center gap-4">
            <div className="relative w-72">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Buscar tarefas..."
                className="h-10 w-full border-slate-300 bg-white pl-10 focus-visible:ring-indigo-600"
              />
            </div>

            <Button className="h-10 bg-[#483DCA] px-6 font-semibold hover:bg-[#483DCA]/90">
              <Plus className="mr-2 h-5 w-5" />
              Nova Tarefa
            </Button>
          </nav>
        </header>

        <h4 className="font-inter mt-10 text-2xl font-light text-slate-600">
          Gerencie o progresso das suas tarefas.
        </h4>

        <div className="mt-8 flex gap-4">
          <Button className="bg-[#483DCA] hover:bg-[#483DCA]/90">
            <LayoutDashboard />
            Atividade [Visão Geral]
            <Badge
              className={cn(
                "h-5 min-w-5 items-center justify-center rounded-full",
                "bg-[#448AFF] px-1 font-mono tabular-nums",
              )}
            >
              8
            </Badge>
          </Button>
          <Button variant="outline">
            {" "}
            <Circle />A Fazer
            <Badge
              className={cn(
                "h-5 min-w-5 items-center justify-center rounded-full",
                "bg-[#CECECE] px-1 font-mono tabular-nums text-black",
              )}
            >
              8
            </Badge>
          </Button>
          <Button variant="outline">
            {" "}
            <Clock /> Em Andamento
            <Badge
              className={cn(
                "h-5 min-w-5 items-center justify-center rounded-full",
                "bg-[#CECECE] px-1 font-mono tabular-nums text-black",
              )}
            >
              8
            </Badge>
          </Button>
          <Button variant="outline">
            <PauseCircle /> Pausadas
            <Badge
              className={cn(
                "h-5 min-w-5 items-center justify-center rounded-full",
                "bg-[#CECECE] px-1 font-mono tabular-nums text-black",
              )}
            >
              8
            </Badge>
          </Button>
          <Button variant="outline">
            <StopCircle /> Concluídas
            <Badge
              className={cn(
                "h-5 min-w-5 items-center justify-center rounded-full",
                "bg-[#CECECE] px-1 font-mono tabular-nums text-black",
              )}
            >
              8
            </Badge>
          </Button>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
