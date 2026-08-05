import RoleList from "@/components/experience/RoleList";
import Divider from "@/components/ui/Divider";
import PageContainer from "@/components/ui/PageContainer";
import PlaceholderSection from "@/components/ui/PlaceholderSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { getFeaturedExperience } from "@/lib/experience";

export default function ExperiencePage() {
  const highlightedRoles = getFeaturedExperience();

  return (
    <PageContainer>
      <div className="text-center">
        <SectionHeading hoverColor="sage">Highlighted Roles</SectionHeading>
      </div>
      <RoleList roles={highlightedRoles} />

      <Divider />

      <PlaceholderSection title="Timeline" hoverColor="sage" />
    </PageContainer>
  );
}
