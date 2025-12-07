import { LucideIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface AuthInputProps extends React.ComponentProps<"input"> {
  label: string;
  icon?: LucideIcon;
  labelRight?: React.ReactNode;
}

export function AuthInput({
  label,
  icon: Icon,
  labelRight,
  className,
  ...props
}: AuthInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label
          htmlFor={props.id}
          className="text-base font-medium text-slate-700"
        >
          {label}
        </Label>
        {labelRight}
      </div>

      <div className="relative">
        {Icon && (
          <Icon className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
        )}
        <Input
          className={cn(
            "h-12 border-slate-200 bg-slate-50 text-base placeholder:text-slate-400 focus-visible:ring-indigo-600",
            Icon ? "pl-12" : "",
            className,
          )}
          {...props}
        />
      </div>
    </div>
  );
}
