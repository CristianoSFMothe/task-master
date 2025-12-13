"use client";

import {
  AlertTriangle,
  Circle,
  Clock,
  Filter,
  Layout,
  LayoutDashboard,
  Menu,
  MoreVertical,
  PauseCircle,
  Search,
  StopCircle,
  User,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import DialogDashboard from "./components/dialog-dashboard";
import Logo from "./components/logo";

function Dashboard() {
  return (
    <main className="flex min-h-screen w-full bg-[#F4F6F8]">
      {/* SIDEBAR - Escondida em Mobile (hidden), Flex em Desktop (lg:flex) */}
      <aside className="hidden w-72 flex-col bg-[#0F172A] px-6 py-8 text-white lg:flex">
        <Logo theme="dark" className="mb-8" />

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
              "flex w-full items-center justify-start gap-2 text-slate-300",
              "bg-transparent text-lg hover:bg-slate-800 hover:text-white",
            )}
          >
            <User className="mr-2" size={24} />
            Perfil
          </Button>
        </div>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <section
        className={cn(
          "h-full min-h-screen flex-1",
          "overflow-auto px-4 py-6 text-slate-900 md:px-6 md:py-8",
        )}
      >
        <header className="mb-8 flex flex-col gap-6">
          <div className="flex w-full items-center justify-between lg:hidden">
            <Logo theme="light" />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="-mr-2 text-slate-900 hover:bg-slate-100"
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
          </div>

          {/* LINHA 2 (Mobile) / LINHA ÚNICA (Desktop):
             [Visão Geral] ... [Busca] [Botão]
          */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h1 className="font-roboto text-3xl font-bold text-slate-900 md:text-4xl">
              Visão Geral
            </h1>

            <nav
              className={cn(
                "flex w-full flex-col gap-3 sm:flex-row",
                "sm:items-center md:w-auto md:flex-1 md:justify-end",
              )}
            >
              {/* Barra de Pesquisa */}
              <div className="relative w-full sm:flex-1 md:max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                  placeholder="Buscar tarefas..."
                  className="h-10 w-full border-slate-300 bg-white pl-10 focus-visible:ring-indigo-600"
                />
              </div>

              {/* Botão Nova Tarefa */}

              <DialogDashboard />
            </nav>
          </div>
        </header>

        <h4 className="font-inter mt-6 text-xl font-light text-slate-600 md:mt-10 md:text-2xl">
          Gerencie o progresso das suas tarefas.
        </h4>

        {/* FILTROS RESPONSIVOS */}
        <div className="mt-8">
          {/* MOBILE/TABLET/LAPTOP: DROPDOWN MENU (Visível apenas em telas menores que 'xl') */}
          <div className="w-full xl:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="h-11 w-full justify-between border-slate-300 bg-white text-slate-700"
                >
                  <span className="flex items-center gap-2 font-medium">
                    <Filter size={18} />
                    Filtrar Tarefas
                  </span>
                  <Badge className="bg-[#483DCA] text-white hover:bg-[#483DCA]/90">
                    Todos
                  </Badge>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="mx-auto w-[90vw] sm:w-[500px]"
                align="start"
              >
                <DropdownMenuItem className="flex cursor-pointer items-center justify-between p-3">
                  <span className="flex items-center gap-2">
                    <LayoutDashboard size={18} /> Visão Geral
                  </span>
                  <Badge className="bg-[#448AFF] text-white">8</Badge>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex cursor-pointer items-center justify-between p-3">
                  <span className="flex items-center gap-2">
                    <Circle size={18} /> A Fazer
                  </span>
                  <Badge className="bg-[#CECECE] text-black">8</Badge>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex cursor-pointer items-center justify-between p-3">
                  <span className="flex items-center gap-2">
                    <Clock size={18} /> Em Andamento
                  </span>
                  <Badge className="bg-[#CECECE] text-black">8</Badge>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex cursor-pointer items-center justify-between p-3">
                  <span className="flex items-center gap-2">
                    <PauseCircle size={18} /> Pausadas
                  </span>
                  <Badge className="bg-[#CECECE] text-black">8</Badge>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex cursor-pointer items-center justify-between p-3">
                  <span className="flex items-center gap-2">
                    <StopCircle size={18} /> Concluídas
                  </span>
                  <Badge className="bg-[#CECECE] text-black">8</Badge>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* DESKTOP GRANDE: LISTA DE BOTÕES (Visível apenas em telas 'xl' ou maiores) */}
          <div className="hidden flex-wrap items-center gap-4 xl:flex">
            <Button className="h-10 gap-2 bg-[#483DCA] hover:bg-[#483DCA]/90">
              <LayoutDashboard size={18} />
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

            <Button
              variant="outline"
              className="h-10 gap-2 border-slate-300 bg-white"
            >
              <Circle size={18} />A Fazer
              <Badge
                className={cn(
                  "h-5 min-w-5 items-center justify-center",
                  "rounded-full bg-[#CECECE] px-1 font-mono tabular-nums text-black",
                )}
              >
                8
              </Badge>
            </Button>

            <Button
              variant="outline"
              className="h-10 gap-2 border-slate-300 bg-white"
            >
              <Clock size={18} /> Em Andamento
              <Badge
                className={cn(
                  "h-5 min-w-5 items-center justify-center",
                  "rounded-full bg-[#CECECE] px-1 font-mono tabular-nums text-black",
                )}
              >
                8
              </Badge>
            </Button>

            <Button
              variant="outline"
              className="h-10 gap-2 border-slate-300 bg-white"
            >
              <PauseCircle size={18} /> Pausadas
              <Badge
                className={cn(
                  "h-5 min-w-5 items-center justify-center rounded-full",
                  "bg-[#CECECE] px-1 font-mono tabular-nums text-black",
                )}
              >
                8
              </Badge>
            </Button>

            <Button
              variant="outline"
              className="h-10 gap-2 border-slate-300 bg-white"
            >
              <StopCircle size={18} /> Concluídas
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
        </div>

        {/* GRID DE CARDS RESPONSIVO */}
        <div className="mt-8 grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {/* Card 1 */}
          <Card
            className={cn(
              "flex flex-col p-5 shadow-sm",
              "transition-shadow duration-200 hover:shadow-md",
            )}
          >
            <div className="mb-3 flex items-start justify-between">
              <Badge
                className={cn(
                  "rounded border-none bg-[#EFEFEF]",
                  "px-2 py-1 text-[10px] font-bold uppercase",
                  "tracking-wider text-[#7A7A7A] hover:bg-[#EFEFEF]",
                )}
              >
                projeto
              </Badge>
              <Button
                variant="outline"
                className="h-auto border-none p-0 text-gray-400 transition-colors hover:text-gray-600"
              >
                <MoreVertical size={18} />
              </Button>
            </div>

            <CardTitle className="mb-2 text-base font-bold leading-tight text-gray-900">
              Integração com Gateway de Pagamento
            </CardTitle>

            <CardDescription className="mb-6 text-xs font-medium leading-relaxed text-gray-500">
              Implementar Stripe para processamento de cartões de crédito na
              tela de checkout.
            </CardDescription>

            <div className="mt-auto flex items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  className={cn(
                    "gap-1.5 whitespace-nowrap rounded border-none",
                    "bg-[#E0E0E0] px-2 py-1 text-[10px] font-semibold",
                    "text-[#5A5A5A] hover:bg-[#E0E0E0]",
                  )}
                >
                  <Clock size={12} className="stroke-[2.5px] text-blue-600" />
                  Em Andamento
                </Badge>

                <Badge
                  className={cn(
                    "gap-1.5 whitespace-nowrap rounded border-none",
                    "bg-[#FFEDF2] px-2 py-1 text-[10px] font-semibold",
                    "text-[#FF4444] hover:bg-[#FFEDF2]",
                  )}
                >
                  <AlertTriangle
                    size={12}
                    className="stroke-[2.5px] text-[#FF4444]"
                  />
                  Crítica
                </Badge>
              </div>

              <span className="whitespace-nowrap text-xs font-bold text-gray-800">
                24 de mar.
              </span>
            </div>
          </Card>

          {/* Card 2 */}
          <Card
            className={cn(
              "flex flex-col p-5 shadow-sm",
              "transition-shadow duration-200 hover:shadow-md",
            )}
          >
            <div className="mb-3 flex items-start justify-between">
              <Badge
                className={cn(
                  "rounded border-none bg-[#EFEFEF]",
                  "px-2 py-1 text-[10px] font-bold uppercase",
                  "tracking-wider text-[#7A7A7A] hover:bg-[#EFEFEF]",
                )}
              >
                incidente
              </Badge>
              <Button
                variant="outline"
                className="h-auto border-none p-0 text-gray-400 transition-colors hover:text-gray-600"
              >
                <MoreVertical size={18} />
              </Button>
            </div>

            <CardTitle className="mb-2 text-base font-bold leading-tight text-gray-900">
              Correção de bug no login
            </CardTitle>

            <CardDescription className="mb-6 text-xs font-medium leading-relaxed text-gray-500">
              Usuários relatam erro 500 ao tentar logar com provedor Google.
            </CardDescription>

            <div className="mt-auto flex items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  className={cn(
                    "gap-1.5 whitespace-nowrap rounded border-none",
                    "bg-[#E0E0E0] px-2 py-1 text-[10px] font-semibold",
                    "text-[#5A5A5A] hover:bg-[#E0E0E0]",
                  )}
                >
                  <PauseCircle
                    size={12}
                    className="stroke-[2.5px] text-blue-600"
                  />
                  Em Andamento
                </Badge>

                <Badge
                  className={cn(
                    "gap-1.5 whitespace-nowrap rounded border-none",
                    "bg-[#a7a4fc] px-2 py-1 text-[10px] font-semibold",
                    "text-[#4740FF] hover:bg-[#a7a4fc]",
                  )}
                >
                  <AlertTriangle
                    size={12}
                    className="stroke-[2.5px] text-[#4740FF]"
                  />
                  Alta
                </Badge>
              </div>

              <span className="whitespace-nowrap text-xs font-bold text-gray-800">
                24 de mar.
              </span>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
