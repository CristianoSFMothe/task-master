"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import {
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  CalendarIcon,
  CheckCircle2,
  Minus,
  Plus,
} from "lucide-react";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

import PriorityButton from "./priority-button";

type TaskPriority = "low" | "medium" | "high" | "critical";

const DialogDashboard = () => {
  const [priority, setPriority] = useState<TaskPriority>("medium");

  return (
    <div className="flex shrink-0">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className={cn(
              "h-10 w-full bg-[#483DCA]",
              "px-6 font-semibold hover:bg-[#483DCA]/90 sm:w-auto",
            )}
          >
            <Plus className="mr-2 h-5 w-5" />
            Nova Tarefa
          </Button>
        </DialogTrigger>

        <DialogContent
          className={cn(
            "max-h-[90vh] w-[95%] overflow-y-auto rounded-xl",
            "bg-white p-0 sm:max-w-[600px] [&>button]:hidden",
          )}
          onInteractOutside={(e) => e.preventDefault()}
        >
          <DialogHeader className="px-6 pb-2 pt-6">
            <DialogTitle className="text-xl font-bold">Nova Tarefa</DialogTitle>
            <DialogDescription className="text-gray-500">
              Preencha os detalhes para criar uma nova tarefa
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 px-6 py-2">
            {/* Título */}
            <div className="space-y-1">
              <Label htmlFor="title" className="text-sm font-medium">
                Título da Tarefa <span className="text-red-500">*</span>
              </Label>
              <Input
                id="title"
                placeholder="Ex: Implementar autenticação via Google"
                className="border-gray-300"
              />
            </div>

            {/* Descrição */}
            <div className="space-y-1">
              <Label htmlFor="description" className="text-sm font-medium">
                Descrição
              </Label>
              <Textarea
                id="description"
                placeholder="Descreva os detalhes..."
                className="min-h-[100px] resize-none border-gray-300"
              />
            </div>

            {/* Status / Tipo */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <Label className="text-sm font-medium">Status</Label>
                <Select defaultValue="todo">
                  <SelectTrigger className="border-gray-300">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todo">A Fazer</SelectItem>
                    <SelectItem value="in-progress">Em Andamento</SelectItem>
                    <SelectItem value="done">Concluída</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1">
                <Label className="text-sm font-medium">Tipo</Label>
                <Select defaultValue="service">
                  <SelectTrigger className="border-gray-300">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="service">
                      Requisição de Serviço
                    </SelectItem>
                    <SelectItem value="bug">Defeito</SelectItem>
                    <SelectItem value="feature">Funcionalidade</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Prioridade */}
            <div className="space-y-1">
              <Label className="text-sm font-medium">Prioridade</Label>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                <PriorityButton
                  label="Baixa"
                  icon={<ArrowDown size={16} />}
                  isActive={priority === "low"}
                  onClick={() => setPriority("low")}
                />

                <PriorityButton
                  label="Média"
                  icon={<Minus size={16} />}
                  isActive={priority === "medium"}
                  onClick={() => setPriority("medium")}
                />

                <PriorityButton
                  label="Alta"
                  icon={<ArrowUp size={16} />}
                  isActive={priority === "high"}
                  onClick={() => setPriority("high")}
                />

                <PriorityButton
                  label="Crítica"
                  icon={<AlertTriangle size={16} />}
                  isActive={priority === "critical"}
                  onClick={() => setPriority("critical")}
                />
              </div>
            </div>

            {/* Datas */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <Label className="text-sm font-medium">Data Início</Label>
                <div className="relative">
                  <Input
                    placeholder="dd/mm/aaaa"
                    className="border-gray-300 pr-10"
                  />
                  <CalendarIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                </div>
              </div>

              <div className="space-y-1">
                <Label className="text-sm font-medium">Data Fim (Prazo)</Label>
                <div className="relative">
                  <Input
                    placeholder="dd/mm/aaaa"
                    className="border-gray-300 pr-10"
                  />
                  <CalendarIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <DialogFooter
            className={cn(
              "flex flex-col-reverse gap-3",
              "border-t bg-gray-50 px-6 py-4 sm:flex-row sm:justify-end",
            )}
          >
            <DialogClose asChild>
              <Button
                variant="outline"
                className="h-10 border-gray-300 px-8 text-gray-700"
              >
                Cancelar
              </Button>
            </DialogClose>

            <Button className="h-10 gap-2 bg-[#483DCA] px-6 hover:bg-[#483DCA]/90">
              Criar Tarefa
              <CheckCircle2 size={16} />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogDashboard;
