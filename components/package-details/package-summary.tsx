"use client";

import { motion } from "motion/react";
import GithubIcon from "../svgs/github-icon";

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
        <span className="shadow-custom relative h-6 w-6 rounded bg-white p-1">
          <GithubIcon className="absolute inset-0" primary={true} />
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
        <div className="flex items-baseline gap-1.5">
          <dt className="text-muted-foreground">Source:</dt>
          <dd>
            <a
              href={source}
              className="text-xs break-all hover:underline md:text-sm"
            >
              {source}
            </a>
          </dd>
        </div>
        <div className="flex items-baseline gap-1.5">
          <dt className="text-muted-foreground">SHA256:</dt>
          <dd>
            <code className="text-xs break-all md:text-sm">{sha256}</code>
          </dd>
        </div>
      </dl>
    </motion.section>
  );
}
