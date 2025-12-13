import {
  AlertTriangle,
  Clock,
  Layout,
  MoreVertical,
  PauseCircle,
  Search,
  User,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import DialogDashboard from "./components/dialog-dashboard";
import DropdownMenuDashboard from "./components/dropdown-menu-dashboard";
import Filters from "./components/filters";
import Logo from "./components/logo";

function Dashboard() {
  return (
    <main className="flex min-h-screen w-full bg-[#F4F6F8]">
      {/* SIDEBAR */}
      <aside className="hidden w-72 flex-col bg-[#0F172A] px-6 py-8 text-white lg:flex">
        <Logo theme="dark" className="mb-8" />

        <div className="flex flex-col gap-3">
          <Button className="flex w-full items-center justify-start gap-2 bg-[#483DCA] text-lg hover:bg-[#483DCA]/90">
            <Layout className="mr-2" size={24} />
            Dashboard
          </Button>

          <Button
            className={cn(
              "flex w-full items-center justify-start gap-2",
              "bg-transparent text-lg text-slate-300 hover:bg-slate-800 hover:text-white",
            )}
          >
            <User className="mr-2" size={24} />
            Perfil
          </Button>
        </div>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="flex-1 overflow-auto px-4 py-6 text-slate-900 md:px-6 md:py-8">
        <header className="mb-8 flex flex-col gap-6">
          {/* HEADER MOBILE */}
          <div className="flex w-full items-center justify-between lg:hidden">
            <Logo theme="light" />
            <DropdownMenuDashboard buttonClassName="-mr-2" />
          </div>

          {/* TÍTULO + AÇÕES */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h1 className="font-roboto text-3xl font-bold md:text-4xl">
              Visão Geral
            </h1>

            <nav className="flex w-full flex-col gap-3 sm:flex-row sm:items-center md:w-auto md:justify-end">
              {/* BUSCA */}
              <div className="relative w-full sm:flex-1 md:max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                  placeholder="Buscar tarefas..."
                  className="h-10 w-full border-slate-300 bg-white pl-10 focus-visible:ring-indigo-600"
                />
              </div>

              {/* NOVA TAREFA */}
              <DialogDashboard />
            </nav>
          </div>
        </header>

        <h4 className="mt-6 text-xl font-light text-slate-600 md:mt-10 md:text-2xl">
          Gerencie o progresso das suas tarefas.
        </h4>

        {/* FILTROS */}
        <Filters />

        {/* GRID DE CARDS */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {/* CARD 1 */}
          <Card className="flex flex-col p-5 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-3 flex items-start justify-between">
              <Badge className="bg-[#EFEFEF] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[#7A7A7A]">
                projeto
              </Badge>
              <Button
                variant="outline"
                className="border-none p-0 text-gray-400"
              >
                <MoreVertical size={18} />
              </Button>
            </div>

            <CardTitle className="mb-2 text-base font-bold">
              Integração com Gateway de Pagamento
            </CardTitle>

            <CardDescription className="mb-6 text-xs font-medium text-gray-500">
              Implementar Stripe para processamento de cartões de crédito na
              tela de checkout.
            </CardDescription>

            <div className="mt-auto flex items-center justify-between">
              <div className="flex gap-2">
                <Badge className="bg-[#E0E0E0] px-2 py-1 text-[10px] font-semibold text-[#5A5A5A]">
                  <Clock size={12} className="mr-1 inline text-blue-600" />
                  Em Andamento
                </Badge>

                <Badge className="bg-[#FFEDF2] px-2 py-1 text-[10px] font-semibold text-[#FF4444]">
                  <AlertTriangle size={12} className="mr-1 inline" />
                  Crítica
                </Badge>
              </div>

              <span className="text-xs font-bold text-gray-800">
                24 de mar.
              </span>
            </div>
          </Card>

          {/* CARD 2 */}
          <Card className="flex flex-col p-5 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-3 flex items-start justify-between">
              <Badge className="bg-[#EFEFEF] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[#7A7A7A]">
                incidente
              </Badge>
              <Button
                variant="outline"
                className="border-none p-0 text-gray-400"
              >
                <MoreVertical size={18} />
              </Button>
            </div>

            <CardTitle className="mb-2 text-base font-bold">
              Correção de bug no login
            </CardTitle>

            <CardDescription className="mb-6 text-xs font-medium text-gray-500">
              Usuários relatam erro 500 ao tentar logar com provedor Google.
            </CardDescription>

            <div className="mt-auto flex items-center justify-between">
              <div className="flex gap-2">
                <Badge className="bg-[#E0E0E0] px-2 py-1 text-[10px] font-semibold text-[#5A5A5A]">
                  <PauseCircle
                    size={12}
                    className="mr-1 inline text-blue-600"
                  />
                  Em Andamento
                </Badge>

                <Badge className="bg-[#a7a4fc] px-2 py-1 text-[10px] font-semibold text-[#4740FF]">
                  <AlertTriangle size={12} className="mr-1 inline" />
                  Alta
                </Badge>
              </div>

              <span className="text-xs font-bold text-gray-800">
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
