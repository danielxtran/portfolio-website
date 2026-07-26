import styles from "./AnimatedName.module.scss";

const WORDS = ["Daniel", "Tran"];

export default function AnimatedName() {
  let letterIndex = 0;

  return (
    <h1 className={`${styles.name} font-display`} aria-label="Daniel Tran">
      {WORDS.map((word) => (
        <span key={word} className={styles.word}>
          {word.split("").map((letter) => {
            const index = letterIndex++;
            return (
              <span
                key={index}
                aria-hidden="true"
                className={styles.letter}
                style={{ "--i": index } as React.CSSProperties}
              >
                {letter}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
