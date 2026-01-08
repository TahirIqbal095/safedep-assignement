import { Github } from "lucide-react";

export default function PackageSummary() {
  return (
    <section className="flex flex-col gap-1.5 text-sm">
      <h2 className="flex items-center gap-1.5">
        <span className="shadow-custom rounded bg-white p-1">
          <Github size={18} />
        </span>
        <span className="text-lg font-medium">next@15.5.4</span>
      </h2>

      <dl className="flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5">
          <dt className="text-muted-foreground">Analysed at</dt>
          <dd>
            <time dateTime="2025-10-24T10:06">24 Oct 2025, 10:06</time>
          </dd>
        </div>
        <div className="flex items-center gap-1.5">
          <dt className="text-muted-foreground">Source:</dt>
          <dd>
            <a href="https://registry.npmjs.org/next/-/next-15.5.4.tgz">
              https://registry.npmjs.org/next/-/next-15.5.4.tgz
            </a>
          </dd>
        </div>
        <div className="flex items-center gap-1.5">
          <dt className="text-muted-foreground">SHA256:</dt>
          <dd>
            <code>
              5188d186e94a8d5470af6ed2725d209d82abc29cc7d6bdd58a748efd7e89f9
            </code>
          </dd>
        </div>
        <div className="flex items-center gap-1.5">
          <dt className="text-muted-foreground">Confidence:</dt>
          <dd>
            <code>
              5188d186e94a8d5470af6ed2725d209d82abc29cc7d6bdd58a748efd7e89f9
            </code>
          </dd>
        </div>
      </dl>
    </section>
  );
}
