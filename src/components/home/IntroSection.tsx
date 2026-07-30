import { siteConfig } from "@/config/site";
import SectionHeading from "@/components/ui/SectionHeading";
import Polaroid from "./Polaroid";

export default function IntroSection() {
  return (
    <section className="grid gap-10 md:grid-cols-2 md:items-center">
      <div>
        <SectionHeading hoverColor="blue">Hello!</SectionHeading>
        <p className="mt-4 font-body text-lg leading-relaxed">{siteConfig.bio}</p>
      </div>
      <Polaroid src={siteConfig.photoSrc} alt="Daniel Tran" />
    </section>
  );
}
