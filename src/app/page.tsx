import RoleList from "@/components/experience/RoleList";
import HighlightsSection from "@/components/home/HighlightsSection";
import IntroSection from "@/components/home/IntroSection";
import Divider from "@/components/ui/Divider";
import PageContainer from "@/components/ui/PageContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import { getCurrentExperience } from "@/lib/experience";
import { getHomepageHighlights } from "@/lib/highlights";

export default function Home() {
  const currentRoles = getCurrentExperience();

  return (
    <PageContainer>
      <IntroSection />

      <Divider />

      <div className="text-center">
        <SectionHeading hoverColor="sage">Current Roles</SectionHeading>
      </div>
      <div className="mt-6">
        <RoleList roles={currentRoles} linkTo={(slug) => `/experience?role=${slug}`} />
      </div>

      <Divider />

      <div className="text-center">
        <SectionHeading hoverColor="mustard">Highlighted Projects &amp; Events</SectionHeading>
      </div>
      <HighlightsSection highlights={getHomepageHighlights()} />
    </PageContainer>
  );
}
