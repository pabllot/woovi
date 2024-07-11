import styles from "./styles.module.scss";

export const Tag = ({ text }: { text: string }) => {
  return <div className={styles.wrapper}>{text}</div>;
};
