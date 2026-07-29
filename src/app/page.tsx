import IntroSection from "@/components/home/IntroSection";
import PlaceholderSection from "@/components/home/PlaceholderSection";
import Divider from "@/components/ui/Divider";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 pb-20">
      <IntroSection />
      <Divider />
      <PlaceholderSection title="Current Roles" />
      <Divider />
      <PlaceholderSection title="Highlighted Projects & Events" />
    </main>
  );
}
