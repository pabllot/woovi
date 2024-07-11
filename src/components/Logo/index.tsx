import styles from "./styles.module.scss";
import logo from "../../assets/Logo.png";

export const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <img src={logo} />
    </div>
  );
};
