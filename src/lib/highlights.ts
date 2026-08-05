import type { Event } from "@/types/event";
import type { Project } from "@/types/project";
import { getAllEvents } from "./events";
import { getFeaturedProjects } from "./projects";

export type Highlight =
  | { type: "project"; date: string; project: Project }
  | { type: "event"; date: string; event: Event };

const HIGHLIGHT_COUNT = 3;

export function getHomepageHighlights(): Highlight[] {
  const projectHighlights: Highlight[] = getFeaturedProjects().map((project) => ({
    type: "project",
    date: project.startDate,
    project,
  }));
  const eventHighlights: Highlight[] = getAllEvents().map((event) => ({
    type: "event",
    date: event.date,
    event,
  }));

  const combined = [...projectHighlights, ...eventHighlights].sort((a, b) =>
    b.date.localeCompare(a.date),
  );

  const topByRecency = combined.slice(0, HIGHLIGHT_COUNT);
  const hasProject = topByRecency.some((item) => item.type === "project");

  // Guarantee at least one project when possible, without exceeding the count.
  if (hasProject || projectHighlights.length === 0) {
    return topByRecency;
  }

  const withGuaranteedProject = [
    ...topByRecency.slice(0, HIGHLIGHT_COUNT - 1),
    projectHighlights[0],
  ];
  return withGuaranteedProject.sort((a, b) => b.date.localeCompare(a.date));
}
