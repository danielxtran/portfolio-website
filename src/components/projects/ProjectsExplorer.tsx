"use client";

import { useRouter } from "next/navigation";
import type { Project } from "@/types/project";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectDialog from "./ProjectDialog";

type ProjectsExplorerProps = {
  allProjects: Project[];
  selectedSlug: string | null;
};

export default function ProjectsExplorer({
  allProjects,
  selectedSlug,
}: ProjectsExplorerProps) {
  const router = useRouter();
  const selectedProject =
    allProjects.find((project) => project.slug === selectedSlug) ?? null;

  function openProject(slug: string) {
    router.push(`/projects?project=${slug}`);
  }

  function closeDialog() {
    router.push("/projects");
  }

  return (
    <>
      <section>
        <div className="text-center">
          <SectionHeading hoverColor="mustard">All Projects</SectionHeading>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {allProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} onSelect={openProject} />
          ))}
        </div>
      </section>

      <ProjectDialog project={selectedProject} onClose={closeDialog} />
    </>
  );
}
