import { getHomepageHighlights } from "@/lib/highlights";
import HighlightCard from "./HighlightCard";

export default function HighlightsSection() {
  const highlights = getHomepageHighlights();

  if (highlights.length === 0) {
    return <p className="mt-6 font-body text-sm italic text-ink/50">Coming soon</p>;
  }

  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-3">
      {highlights.map((highlight) => (
        <HighlightCard
          key={highlight.type === "project" ? highlight.project.slug : highlight.event.slug}
          highlight={highlight}
        />
      ))}
    </div>
  );
}
