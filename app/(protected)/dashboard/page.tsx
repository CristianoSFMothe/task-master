import { DialogClose } from "@radix-ui/react-dialog";
import {
  AlertTriangle,
  CalendarIcon,
  CheckCircle2,
  Circle,
  Clock,
  Layout,
  LayoutDashboard,
  MoreVertical,
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
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
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

            <Dialog>
              <DialogTrigger asChild>
                <Button className="h-10 bg-[#483DCA] px-6 font-semibold hover:bg-[#483DCA]/90">
                  <Plus className="mr-2 h-5 w-5" />
                  Nova Tarefa
                </Button>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Nova Tarefa</DialogTitle>
                  <DialogDescription>
                    Preencha os detalhes para criar uma nova tarefa
                  </DialogDescription>
                </DialogHeader>

                {/* Título */}
                <div>
                  <div>
                    <Label>Título da Tarefa *</Label>

                    <Input />

                    {/* Descrição */}
                    <div>
                      <Label>Descrição</Label>
                      <Textarea />
                    </div>

                    {/* Grid Status e Tipo */}
                    <div>
                      <div>
                        <Label>Status</Label>
                        <Select defaultValue="todo">
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione um status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="todo">A Fazer</SelectItem>
                            <SelectItem value="in-progress">
                              Em Andamento
                            </SelectItem>
                            <SelectItem value="done">Concluída</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>Tipo</Label>
                        <Select defaultValue="service">
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o serviço" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="service">
                              Requisição de Serviço
                            </SelectItem>
                            <SelectItem value="bug">Defeito</SelectItem>
                            <SelectItem value="feature">
                              Funcionalidade
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Prioridade */}
                    <div>
                      <Label>Prioridade</Label>
                      <div>
                        <Button>Baixa</Button>
                        <Button>Média</Button>
                        <Button>Alta</Button>
                        <Button>
                          {" "}
                          <AlertTriangle />
                          Crítica
                        </Button>
                      </div>
                    </div>

                    {/* Datas */}
                    <div>
                      <div>
                        <Label>Data Início</Label>
                        <div>
                          <Input placeholder="dd/mm/aaaa" />
                          <CalendarIcon />
                        </div>
                      </div>
                    </div>

                    <div>
                      <div>
                        <Label>Data Fim (Prazo)</Label>
                        <div>
                          <Input placeholder="dd/mm/aaaa" />
                          <CalendarIcon />
                        </div>
                      </div>
                    </div>
                  </div>

                  <DialogFooter>
                    <DialogClose asChild>
                      <Button>Cancelar</Button>
                    </DialogClose>
                    <Button>
                      Criar Tarefa <CheckCircle2 />
                    </Button>
                  </DialogFooter>
                </div>
              </DialogContent>
            </Dialog>
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

        <div className="mt-8 grid w-full grid-cols-3 gap-4">
          <Card
            className={cn(
              "p-5 shadow-sm",
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
                className="border-none text-gray-400 transition-colors hover:text-gray-600"
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
              <div className="flex items-center gap-2">
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

          <Card
            className={cn(
              "p-5 shadow-sm",
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
                className="border-none text-gray-400 transition-colors hover:text-gray-600"
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
              <div className="flex items-center gap-2">
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

          <Card
            className={cn(
              "p-5 shadow-sm",
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
                className="border-none text-gray-400 transition-colors hover:text-gray-600"
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
              <div className="flex items-center gap-2">
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

          <Card
            className={cn(
              "p-5 shadow-sm",
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
                className="border-none text-gray-400 transition-colors hover:text-gray-600"
              >
                <MoreVertical size={18} />
              </Button>
            </div>

            <CardTitle className="mb-2 text-base font-bold leading-tight text-gray-900">
              Lorem ipsum dolor sit amet.
            </CardTitle>

            <CardDescription className="mb-6 text-xs font-medium leading-relaxed text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores,
              est!
            </CardDescription>

            <div className="mt-auto flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
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
                  Crítica
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
