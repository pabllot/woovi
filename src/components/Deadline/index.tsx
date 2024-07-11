import styles from "./styles.module.scss";

export const Deadline = ({ text }: { text: string }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Prazo de pagamento</p>
      <p className={styles.date}>{text}</p>
    </div>
  );
};
