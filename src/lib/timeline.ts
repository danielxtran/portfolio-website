import type { Experience } from "@/types/experience";
import { getAllExperience } from "./experience";
import { getSemester } from "./semester";

export type TimelineSegment = {
  experience: Experience;
  startIndex: number;
  endIndex: number | null; // null = ongoing
};

export type TimelineLane = {
  id: string; // slug of the earliest entry in the chain
  segments: TimelineSegment[];
};

function findChainHeadSlug(entry: Experience, bySlug: Map<string, Experience>): string {
  let current = entry;
  const visited = new Set<string>();

  while (current.continuesFrom) {
    if (visited.has(current.slug)) break; // guard against accidental cycles
    visited.add(current.slug);
    const previous = bySlug.get(current.continuesFrom);
    if (!previous) break;
    current = previous;
  }

  return current.slug;
}

export function getTimelineLanes(): TimelineLane[] {
  const experiences = getAllExperience();
  const bySlug = new Map(experiences.map((entry) => [entry.slug, entry]));
  const segmentsByHead = new Map<string, TimelineSegment[]>();

  for (const entry of experiences) {
    const headSlug = findChainHeadSlug(entry, bySlug);
    const segment: TimelineSegment = {
      experience: entry,
      startIndex: getSemester(entry.startDate).index,
      endIndex: entry.endDate ? getSemester(entry.endDate).index : null,
    };

    const segments = segmentsByHead.get(headSlug) ?? [];
    segments.push(segment);
    segmentsByHead.set(headSlug, segments);
  }

  const lanes: TimelineLane[] = Array.from(segmentsByHead.entries()).map(([id, segments]) => ({
    id,
    segments: segments.sort((a, b) => a.startIndex - b.startIndex),
  }));

  return lanes.sort((a, b) => a.segments[0].startIndex - b.segments[0].startIndex);
}
