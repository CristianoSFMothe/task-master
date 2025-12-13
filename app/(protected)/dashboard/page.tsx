import { Layout, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import Filters from "./components/filters";
import DashboardHeader from "./components/header";
import Logo from "./components/logo";
import TaskCard from "./components/task-card";
import { TaskPriority, TaskStatus } from "./types/task";

function Dashboard() {
  const tasks = [
    {
      id: 1,
      type: "projeto",
      title: "Integração com Gateway de Pagamento",
      description:
        "Implementar Stripe para processamento de cartões de crédito na tela de checkout.",
      status: TaskStatus.IN_PROGRESS,
      priority: TaskPriority.CRITICAL,
      date: "24 Mar",
    },
    {
      id: 2,
      type: "incidente",
      title: "Correção de bug no login",
      description:
        "Usuários relatam erro 500 ao tentar logar com provedor Google.",
      status: TaskStatus.PAUSED,
      priority: TaskPriority.HIGH,
      date: "24 Mar",
    },
  ];

  return (
    <main className="flex min-h-screen w-full bg-[#F4F6F8]">
      {/* SIDEBAR */}
      <aside className="hidden w-72 flex-col bg-[#0F172A] px-6 py-8 text-white lg:flex">
        <Logo theme="dark" className="mb-8" />

        <div className="flex flex-col gap-3">
          <Button className="flex w-full items-center justify-start gap-2 bg-[#483DCA] text-lg hover:bg-[#483DCA]/90">
            <Layout size={24} />
            Dashboard
          </Button>

          <Button
            className={cn(
              "flex w-full items-center justify-start gap-2",
              "bg-transparent text-lg text-slate-300 hover:bg-slate-800 hover:text-white",
            )}
          >
            <User size={24} />
            Perfil
          </Button>
        </div>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="flex-1 overflow-auto px-4 py-6 text-slate-900 md:px-6 md:py-8">
        <DashboardHeader />

        <h4 className="mt-6 text-xl font-light text-slate-600 md:mt-10 md:text-2xl">
          Gerencie o progresso das suas tarefas.
        </h4>

        {/* FILTROS */}
        <Filters />

        {/* GRID DE CARDS */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              type={task.type}
              title={task.title}
              description={task.description}
              status={task.status}
              priority={task.priority}
              date={task.date}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
