// Observation.tsx
import styles from "./styles.module.scss";

export const Observation = ({ text, isSelected }: { text: string; isSelected: boolean }) => {
  return (
    <div className={styles.wrapper}>
      {text}
      <span className={`${styles.arrow} ${isSelected ? styles.isSelected : ""}`}></span>
    </div>
  );
};
