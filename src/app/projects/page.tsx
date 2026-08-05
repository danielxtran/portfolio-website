import ProjectsExplorer from "@/components/projects/ProjectsExplorer";
import PageContainer from "@/components/ui/PageContainer";
import { getAllProjects } from "@/lib/projects";

type ProjectsPageProps = {
  searchParams: Promise<{ project?: string }>;
};

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const { project } = await searchParams;

  return (
    <PageContainer>
      <ProjectsExplorer allProjects={getAllProjects()} selectedSlug={project ?? null} />
    </PageContainer>
  );
}
