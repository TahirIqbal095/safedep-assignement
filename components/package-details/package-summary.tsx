"use client";
import { Github } from "lucide-react";
import { motion } from "motion/react";

interface PackageSummaryProps {
  packageName: string;
  version: string;
  analyzedAt: string;
  source: string;
  sha256: string;
}

export default function PackageSummary({
  packageName,
  version,
  analyzedAt,
  source,
  sha256,
}: PackageSummaryProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      className="flex flex-col gap-1.5 text-sm"
    >
      <h2 className="flex items-center gap-1.5">
        <span className="shadow-custom rounded bg-white p-1">
          <Github size={18} />
        </span>
        <span className="text-lg font-medium">
          {packageName}@{version}
        </span>
      </h2>

      <dl className="flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5">
          <dt className="text-muted-foreground">Analysed at</dt>
          <dd>
            <time dateTime={analyzedAt}>{analyzedAt}</time>
          </dd>
        </div>
        <div className="flex items-center gap-1.5">
          <dt className="text-muted-foreground">Source:</dt>
          <dd>
            <a href={source} className="break-all">
              {source}
            </a>
          </dd>
        </div>
        <div className="flex items-center gap-1.5">
          <dt className="text-muted-foreground">SHA256:</dt>
          <dd>
            <code className="break-all">{sha256}</code>
          </dd>
        </div>
      </dl>
    </motion.section>
  );
}
