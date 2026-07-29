type PlaceholderSectionProps = {
  title: string;
};

export default function PlaceholderSection({ title }: PlaceholderSectionProps) {
  return (
    <section className="text-center">
      <h2 className="font-display text-3xl text-ink">{title}</h2>
      <p className="mt-2 font-body text-sm italic text-ink/50">Coming soon</p>
    </section>
  );
}
