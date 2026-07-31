import projectsData from "@/data/projects.json";
import type { Project } from "@/types/project";

const projects = projectsData as Project[];

export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => b.startDate.localeCompare(a.startDate));
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((entry) => entry.featured === true);
}
