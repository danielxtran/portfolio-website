import RoleList from "@/components/experience/RoleList";
import Divider from "@/components/ui/Divider";
import PageContainer from "@/components/ui/PageContainer";
import PlaceholderSection from "@/components/ui/PlaceholderSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { getFeaturedExperience } from "@/lib/experience";

export default function ExperiencePage() {
  const featured = getFeaturedExperience();
  const currentRoles = featured.filter((role) => role.current);
  const previousRoles = featured.filter((role) => !role.current);

  return (
    <PageContainer>
      <div className="text-center">
        <SectionHeading hoverColor="sage">Current Roles</SectionHeading>
      </div>
      <RoleList roles={currentRoles} />

      <Divider />

      <div className="text-center">
        <SectionHeading hoverColor="sage">Previous Roles</SectionHeading>
      </div>
      <RoleList roles={previousRoles} />

      <Divider />

      <PlaceholderSection title="Timeline" hoverColor="sage" />
    </PageContainer>
  );
}
