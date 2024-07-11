import styles from "./styles.module.scss";

export const Total = ({ text }: { text: string }) => {
  return <div className={styles.wrapper}>Total: R$ {text}</div>;
};
