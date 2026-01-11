import { riskBadgeConfig } from "@/config/valnerabilities";
import { cn } from "@/lib/utils";
import { RiskLevel } from "@/types";

export const RiskBadge = ({ risk }: { risk: RiskLevel }) => {
  const config = riskBadgeConfig[risk];
  const Icon = config.icon;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded px-2 py-0.5 text-xs font-medium",
        config.bg,
        config.text
      )}
    >
      <Icon size={12} className={cn(config.text)} />
      {risk}
    </span>
  );
};
