import AnimatedName from "../animatedname/AnimatedName";
import SocialLinks from "./SocialLinks";

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-4 px-6 pt-12 pb-4 text-center">
      <AnimatedName />
      <p className="font-body text-sm tracking-wide text-ink/70">
        Honors CSE third-year @ The Ohio State University &middot; Vice President @ Engineering Ambassadors &middot; MakeOHI/O Co-Lead @ OHI/O
      </p>
      <SocialLinks />
    </header>
  );
}
