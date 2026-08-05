import eventsData from "@/data/events.json";
import type { Event } from "@/types/event";

const events = eventsData as Event[];

export function getAllEvents(): Event[] {
  return [...events].sort((a, b) => b.date.localeCompare(a.date));
}
