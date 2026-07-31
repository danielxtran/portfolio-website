import experiencesData from "@/data/experiences.json";
import type { Experience } from "@/types/experience";

const experiences = experiencesData as Experience[];

export function getAllExperience(): Experience[] {
  return [...experiences].sort((a, b) => b.startDate.localeCompare(a.startDate));
}

export function getFeaturedExperience(): Experience[] {
  return getAllExperience().filter((entry) => entry.featured === true);
}
