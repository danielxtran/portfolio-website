import RoleList from "@/components/experience/RoleList";
import TimelineExplorer from "@/components/experience/TimelineExplorer";
import Divider from "@/components/ui/Divider";
import PageContainer from "@/components/ui/PageContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import { getAllExperience, getFeaturedExperience } from "@/lib/experience";
import { getCurrentSemester } from "@/lib/semester";

type ExperiencePageProps = {
  searchParams: Promise<{ role?: string }>;
};

export default async function ExperiencePage({ searchParams }: ExperiencePageProps) {
  const { role } = await searchParams;
  const highlighted = getFeaturedExperience();
  const current = highlighted.filter((entry) => entry.current);
  const previous = highlighted.filter((entry) => !entry.current);

  return (
    <PageContainer>
      <div className="text-center">
        <SectionHeading hoverColor="sage">Highlighted Roles</SectionHeading>
      </div>
      <div className="mt-6 grid gap-10 sm:grid-cols-2">
        <div>
          <h3 className="font-body text-sm font-medium uppercase tracking-wide text-ink/50">
            Current
          </h3>
          <div className="mt-3">
            <RoleList roles={current} linkTo={(slug) => `/experience?role=${slug}`} />
          </div>
        </div>
        <div>
          <h3 className="font-body text-sm font-medium uppercase tracking-wide text-ink/50">
            Previous
          </h3>
          <div className="mt-3">
            <RoleList roles={previous} linkTo={(slug) => `/experience?role=${slug}`} />
          </div>
        </div>
      </div>

      <Divider />

      <div className="text-center">
        <SectionHeading hoverColor="sage">Timeline</SectionHeading>
      </div>
      <div className="mt-6">
        <TimelineExplorer
          roles={getAllExperience()}
          selectedSlug={role ?? null}
          currentSemester={getCurrentSemester()}
        />
      </div>
    </PageContainer>
  );
}
