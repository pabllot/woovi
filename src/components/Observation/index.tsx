// Observation.tsx
import styles from "./styles.module.scss";

export const Observation = ({ text }: { text: string }) => {
  return (
    <div className={styles.wrapper}>
      {text}
      <span className={styles.arrow}></span>
    </div>
  );
};
