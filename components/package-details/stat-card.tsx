import { cn } from "@/lib/utils";
import React from "react";

interface StatCardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  primary?: boolean;
  danger?: boolean;
}

function StatCard({ label, value, icon, primary, danger }: StatCardProps) {
  return (
    <div className="bg-card shadow-custom rounded p-3">
      <div className="flex items-center gap-1.5">
        <div
          className={cn(
            "shadow-custom flex h-6 w-6 items-center justify-center rounded p-0.5",
            danger === true ? "text-destructive" : "text-primary"
          )}
          aria-hidden="true"
        >
          {icon}
        </div>
        <h3 className={cn("text-muted-foreground text-lg font-extralight")}>
          {label}
        </h3>
      </div>
      <p
        className={cn(
          "mt-4 text-xl font-medium md:text-2xl",
          primary === true ? "text-primary" : undefined
        )}
      >
        {value}
      </p>
    </div>
  );
}
export default StatCard;
