import SectionHeading from "@/components/ui/SectionHeading";

type PlaceholderSectionProps = {
  title: string;
  hoverColor?: "blue" | "coral" | "sage" | "mustard" | "orange";
};

export default function PlaceholderSection({
  title,
  hoverColor,
}: PlaceholderSectionProps) {
  return (
    <section className="text-center">
      <SectionHeading hoverColor={hoverColor}>{title}</SectionHeading>
      <p className="mt-2 font-body text-sm italic text-ink/50">Coming soon</p>
    </section>
  );
}
