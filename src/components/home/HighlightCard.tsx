import Link from "next/link";
import type { Highlight } from "@/lib/highlights";
import { formatDateRange } from "@/lib/date";

type HighlightCardProps = {
  highlight: Highlight;
};

const CARD_CLASS =
  "block rounded-lg border border-ink/10 bg-paper p-4 transition-colors hover:border-ink/30";
const KICKER_CLASS = "font-body text-xs uppercase tracking-wide text-ink/40";

export default function HighlightCard({ highlight }: HighlightCardProps) {
  if (highlight.type === "project") {
    const { project } = highlight;
    return (
      <Link href={`/projects?project=${project.slug}`} className={CARD_CLASS}>
        <p className={KICKER_CLASS}>Project</p>
        <h3 className="mt-1 font-display text-xl text-ink">{project.title}</h3>
        <p className="mt-1 font-body text-sm text-ink/60">
          {formatDateRange(project.startDate, project.endDate)}
        </p>
      </Link>
    );
  }

  const { event } = highlight;
  return (
    <a
      href={event.url}
      target="_blank"
      rel="noopener noreferrer"
      className={CARD_CLASS}
    >
      <p className={KICKER_CLASS}>Post</p>
      <h3 className="mt-1 font-display text-xl text-ink">{event.title}</h3>
      <p className="mt-1 font-body text-sm text-ink/60">{event.caption}</p>
    </a>
  );
}
