"use client";

import { useState } from "react";
import type { Highlight } from "@/lib/highlights";
import type { Event } from "@/types/event";
import EventDialog from "./EventDialog";
import HighlightCard from "./HighlightCard";

type HighlightsSectionProps = {
  highlights: Highlight[];
};

export default function HighlightsSection({ highlights }: HighlightsSectionProps) {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  if (highlights.length === 0) {
    return <p className="mt-6 font-body text-sm italic text-ink/50">Coming soon</p>;
  }

  return (
    <>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {highlights.map((highlight) => (
          <HighlightCard
            key={highlight.type === "project" ? highlight.project.slug : highlight.event.slug}
            highlight={highlight}
            onSelectEvent={setSelectedEvent}
          />
        ))}
      </div>

      <EventDialog event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </>
  );
}
