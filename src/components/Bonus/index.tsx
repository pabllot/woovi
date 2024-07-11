import styles from "./styles.module.scss";

export const Bonus = ({ text }: { text: string }) => {
  return <div className={styles.wrapper}>{text}</div>;
};
