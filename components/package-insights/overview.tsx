import { overviewConfig } from "@/config/overview";
import { cn } from "@/lib/utils";

interface SectionProps {
  title: string;
  borderColor?: string;
  children: React.ReactNode;
}

function InsightSection({ title, borderColor, children }: SectionProps) {
  return (
    <div className={cn("border-l-4 py-6 pl-4", borderColor || "border-border")}>
      <h3 className="text-foreground mb-2 text-xl font-medium">{title}</h3>
      <div className="text-muted-foreground space-y-4 text-base leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export default function OverviewTab() {
  return (
    <div className="space-y-8 p-6 md:p-8">
      {overviewConfig.map((section, index) => (
        <InsightSection
          key={index}
          title={section.title}
          borderColor={section.borderColor}
        >
          {section.content.map((item, i) => (
            <p key={i}>
              {item.type === "note" && (
                <strong className="text-foreground font-semibold">
                  Note:{" "}
                </strong>
              )}
              {item.value}
            </p>
          ))}
        </InsightSection>
      ))}
    </div>
  );
}
