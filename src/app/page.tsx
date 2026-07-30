import IntroSection from "@/components/home/IntroSection";
import PlaceholderSection from "@/components/home/PlaceholderSection";
import Divider from "@/components/ui/Divider";
import { CONTENT_WIDTH_CLASS } from "@/lib/layout";

export default function Home() {
  return (
    <main className={`mx-auto flex w-full ${CONTENT_WIDTH_CLASS} flex-1 flex-col px-6 pb-20`}>
      <IntroSection />
      <Divider />
      <PlaceholderSection title="Current Roles" />
      <Divider />
      <PlaceholderSection title="Highlighted Projects & Events" />
    </main>
  );
}
