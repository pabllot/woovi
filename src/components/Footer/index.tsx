import styles from "./styles.module.scss";
import safe_image from "../../assets/safe_icon.png";
import logo from "../../assets/Logo_mono.png";

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <img src={safe_image} />
      <p>Pagamento 100% seguro via:</p>
      <img className={styles.logo} src={logo} />
    </div>
  );
};
