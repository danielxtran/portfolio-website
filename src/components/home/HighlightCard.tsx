import Link from "next/link";
import type { Highlight } from "@/lib/highlights";
import type { Event } from "@/types/event";
import { formatDateRange } from "@/lib/date";

type HighlightCardProps = {
  highlight: Highlight;
  onSelectEvent: (event: Event) => void;
};

const CARD_CLASS =
  "block w-full rounded-lg border border-ink/10 bg-paper p-4 text-left transition-colors hover:border-ink/30";
const KICKER_CLASS = "font-body text-xs uppercase tracking-wide text-ink/40";

export default function HighlightCard({ highlight, onSelectEvent }: HighlightCardProps) {
  if (highlight.type === "project") {
    const { project } = highlight;
    return (
      <Link href={`/projects?project=${project.slug}`} className={CARD_CLASS}>
        <p className={KICKER_CLASS}>Project</p>
        <h3 className="mt-1 font-display text-xl text-ink">{project.title}</h3>
        <p className="mt-1 font-body text-sm text-ink/60">
          {project.location} · {formatDateRange(project.startDate, project.endDate)}
        </p>
        <p className="mt-2 line-clamp-3 font-body text-sm text-ink/70">{project.description}</p>
      </Link>
    );
  }

  const { event } = highlight;
  return (
    <button type="button" onClick={() => onSelectEvent(event)} className={CARD_CLASS}>
      <p className={KICKER_CLASS}>Post</p>
      <h3 className="mt-1 font-display text-xl text-ink">{event.title}</h3>
      <p className="mt-2 line-clamp-3 font-body text-sm text-ink/70">{event.caption}</p>
    </button>
  );
}
