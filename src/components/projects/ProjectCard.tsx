import type { Project } from "@/types/project";
import { formatDateRange } from "@/lib/date";

type ProjectCardProps = {
  project: Project;
  onSelect: (slug: string) => void;
};

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(project.slug)}
      className="rounded-lg border border-ink/10 bg-paper p-4 text-left transition-colors hover:border-ink/30"
    >
      <h3 className="font-display text-xl text-ink">{project.title}</h3>
      <p className="mt-1 font-body text-sm text-ink/60">
        {project.company} · {formatDateRange(project.startDate, project.endDate)}
      </p>
    </button>
  );
}
