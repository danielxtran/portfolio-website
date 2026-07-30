import { siteConfig } from "@/config/site";
import Polaroid from "./Polaroid";

export default function IntroSection() {
  return (
    <section className="grid gap-10 md:grid-cols-2 md:items-center">
      <p className="font-body text-lg leading-relaxed">{siteConfig.bio}</p>
      <Polaroid src={siteConfig.photoSrc} alt="Daniel Tran" />
    </section>
  );
}
