import styles from "./styles.module.scss";
import check from "../../assets/check.png";

export const CheckButton = ({ isSelected }: { isSelected: boolean }) => {
  return <button className={`${styles.button} ${isSelected ? styles.buttonHighlighted : ""}`}>{isSelected && <img src={check} />}</button>;
};
