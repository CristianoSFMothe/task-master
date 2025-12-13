"use client";

import { MoreVertical } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

import { TaskPriority, TaskStatus } from "../types/task";
import { priorityConfig, statusConfig } from "../types/task-config";

type TaskCardProps = {
  type: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  date: string;
};

export default function TaskCard({
  type,
  title,
  description,
  status,
  priority,
  date,
}: TaskCardProps) {
  const statusData = statusConfig[status];
  const priorityData = priorityConfig[priority];

  const StatusIcon = statusData.icon;
  const PriorityIcon = priorityData.icon;

  return (
    <Card className="flex flex-col p-5 shadow-sm transition-shadow hover:shadow-md">
      {/* HEADER */}
      <div className="mb-3 flex items-start justify-between">
        <Badge className="bg-[#EFEFEF] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[#7A7A7A]">
          {type}
        </Badge>

        <Button variant="outline" className="border-none p-0 text-gray-400">
          <MoreVertical size={18} />
        </Button>
      </div>

      {/* TITLE */}
      <CardTitle className="mb-2 text-base font-bold">{title}</CardTitle>

      {/* DESCRIPTION */}
      <CardDescription className="mb-6 text-xs font-medium text-gray-500">
        {description}
      </CardDescription>

      {/* FOOTER */}
      <div className="mt-auto flex items-center justify-between">
        <div className="flex gap-2">
          {/* STATUS */}
          <Badge className={statusData.className}>
            <StatusIcon size={12} className="mr-1 inline" />
            {statusData.label}
          </Badge>

          {/* PRIORITY */}
          <Badge className={priorityData.className}>
            <PriorityIcon size={12} className="mr-1 inline" />
            {priorityData.label}
          </Badge>
        </div>

        <span className="text-xs font-bold text-gray-800">{date}</span>
      </div>
    </Card>
  );
}
