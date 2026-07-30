import type { CSSProperties, ReactNode } from "react";
import styles from "./SectionHeading.module.scss";

type HoverColor = "blue" | "coral" | "sage" | "mustard" | "orange";

type SectionHeadingProps = {
  children: ReactNode;
  hoverColor?: HoverColor;
};

export default function SectionHeading({
  children,
  hoverColor = "blue",
}: SectionHeadingProps) {
  return (
    <h2
      className={`font-display text-3xl text-ink ${styles.heading}`}
      style={{ "--hover-color": `var(--color-${hoverColor})` } as CSSProperties}
    >
      {children}
    </h2>
  );
}
