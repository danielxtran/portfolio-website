import styles from "./AnimatedName.module.scss";

const WORDS = ["Daniel", "Tran"];

export default function AnimatedName() {
  return (
    <h1 className={`${styles.name} font-display`} aria-label={WORDS.join(" ")}>
      {WORDS.map((word) => (
        <span key={word} className={styles.word}>
          {word.split("").map((letter, i) => (
            <span
              key={i}
              aria-hidden="true"
              className={styles.letter}
            >
              {letter}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}
