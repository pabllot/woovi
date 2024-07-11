import check from "../../assets/check.png";

import styles from "./styles.module.scss";

export const PaymentStepLine = ({ text, value, isSelected, isOnGoing }: { text: string; value: string; isSelected: boolean; isOnGoing: boolean }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <button className={`${styles.button} ${isSelected ? styles.buttonHighlighted : ""} ${isOnGoing ? styles.onGoing : ""}`}>
          {isSelected && <img src={check} />}
        </button>
        <p>{text}</p>
      </div>
      <b className={styles.value}>R$ {value}</b>
    </div>
  );
};
