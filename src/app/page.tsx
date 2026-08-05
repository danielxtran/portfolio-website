import RoleList from "@/components/experience/RoleList";
import HighlightsSection from "@/components/home/HighlightsSection";
import IntroSection from "@/components/home/IntroSection";
import Divider from "@/components/ui/Divider";
import PageContainer from "@/components/ui/PageContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import { getFeaturedExperience } from "@/lib/experience";

export default function Home() {
  const currentRoles = getFeaturedExperience().filter((role) => role.current);

  return (
    <PageContainer>
      <IntroSection />

      <Divider />

      <div className="text-center">
        <SectionHeading hoverColor="sage">Current Roles</SectionHeading>
      </div>
      <RoleList roles={currentRoles} />

      <Divider />

      <div className="text-center">
        <SectionHeading hoverColor="mustard">Highlighted Projects &amp; Events</SectionHeading>
      </div>
      <HighlightsSection />
    </PageContainer>
  );
}
