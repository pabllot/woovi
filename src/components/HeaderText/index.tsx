import styles from "./styles.module.scss";

export const HeaderText = ({ text }: { text: string }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.text}>{text}</h1>
    </div>
  );
};
