import { Button } from "@mui/material";

import qrcode from "../../assets/qrcode.png";
import copy from "../../assets/copy.png";
import styles from "./styles.module.scss";

export const QRCode = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.qrcode_container}>
        <img src={qrcode} />
      </div>
      <Button color="secondary" variant="contained" className={styles.btn}>
        <span className={styles.btn_text}>Clique para copiar QR CODE</span> <img src={copy} />
      </Button>{" "}
    </div>
  );
};
