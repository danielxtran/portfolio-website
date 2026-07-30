import IntroSection from "@/components/home/IntroSection";
import PlaceholderSection from "@/components/ui/PlaceholderSection";
import Divider from "@/components/ui/Divider";
import PageContainer from "@/components/ui/PageContainer";

export default function Home() {
  return (
    <PageContainer>
      <IntroSection />
      <Divider />
      <PlaceholderSection title="Current Roles" hoverColor="sage" />
      <Divider />
      <PlaceholderSection title="Highlighted Projects & Events" hoverColor="mustard" />
    </PageContainer>
  );
}
