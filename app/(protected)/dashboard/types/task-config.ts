import {
  AlertTriangle,
  ArrowDownCircle,
  ArrowUpCircle,
  CheckCircle2,
  Circle,
  Clock,
  MinusCircle,
  PauseCircle,
} from "lucide-react";

import { TaskPriority, TaskStatus } from "./task";

export const statusConfig = {
  [TaskStatus.TODO]: {
    label: "A Fazer",
    icon: Circle,
    className: "bg-[#F1F5F9] text-[#475569]",
  },
  [TaskStatus.IN_PROGRESS]: {
    label: "Em Andamento",
    icon: Clock,
    className: "bg-[#E0E0E0] text-[#5A5A5A]",
  },
  [TaskStatus.PAUSED]: {
    label: "Pausado",
    icon: PauseCircle,
    className: "bg-[#FFF4CC] text-[#B26A00]",
  },
  [TaskStatus.COMPLETED]: {
    label: "Concluído",
    icon: CheckCircle2,
    className: "bg-[#E6F4EA] text-[#1E7F45]",
  },
} as const;

export const priorityConfig = {
  [TaskPriority.CRITICAL]: {
    label: "Crítica",
    icon: AlertTriangle,
    className: "bg-[#FFEDF2] text-[#FF4444]",
  },
  [TaskPriority.HIGH]: {
    label: "Alta",
    icon: ArrowUpCircle,
    className: "bg-[#FFE4E6] text-[#9F1239]",
  },
  [TaskPriority.MEDIUM]: {
    label: "Média",
    icon: MinusCircle,
    className: "bg-[#E0E7FF] text-[#3730A3]",
  },
  [TaskPriority.LOW]: {
    label: "Baixa",
    icon: ArrowDownCircle,
    className: "bg-[#F1F5F9] text-[#475569]",
  },
} as const;
