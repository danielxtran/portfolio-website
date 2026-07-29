import Polaroid from "./Polaroid";

const BIO =
  "PLACEHOLDER_BIO — replace with a couple sentences about who you are, what you're curious about, and what you're working on right now.";

export default function IntroSection() {
  return (
    <section className="grid gap-10 md:grid-cols-2 md:items-center">
      <p className="font-body text-lg leading-relaxed">{BIO}</p>
      <Polaroid src="/photo.jpg" alt="Daniel Tran" />
    </section>
  );
}
