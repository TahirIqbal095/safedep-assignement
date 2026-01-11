import { RiskLevel } from "@/types";
import {
  AlertTriangle,
  HelpCircle,
  LucideIcon,
  ShieldAlert,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const riskBadgeConfig: Record<
  RiskLevel,
  { bg: string; text: string; icon: LucideIcon }
> = {
  Low: {
    bg: "bg-cyan-50",
    text: "text-cyan-700",
    icon: ShieldCheck,
  },
  Medium: {
    bg: "bg-yellow-50",
    text: "text-yellow-700",
    icon: AlertTriangle,
  },
  High: {
    bg: "bg-pink-50",
    text: "text-pink-700",
    icon: Zap,
  },
  Critical: {
    bg: "bg-red-50",
    text: "text-red-700",
    icon: ShieldAlert,
  },
  Unspecified: {
    bg: "bg-gray-50",
    text: "text-gray-700",
    icon: HelpCircle,
  },
};
