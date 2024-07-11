import styles from "./styles.module.scss";

export const Identifier = ({ text }: { text: string }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Identificador</p>
      <p className={styles.id}>{text}</p>
    </div>
  );
};
