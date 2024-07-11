import styles from "./styles.module.scss";

export const InstallmentCardValues = ({ times, value }: { times: number; value: string }) => {
  return (
    <div className={styles.wrapper}>
      <h1>{times}x</h1>
      <p>R$ {value}</p>
    </div>
  );
};
