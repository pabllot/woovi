import styles from "./styles.module.scss";

export const CET = ({ percentage, value }: { percentage: string; value: string }) => {
  return (
    <div className={styles.wrapper}>
      <p>CET: {percentage}%</p>
      <p>Total: R$ {value}</p>
    </div>
  );
};
