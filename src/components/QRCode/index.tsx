import { useState } from "react";
import { Alert, Button } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

import qrcode from "../../assets/qrcode.png";
import copy from "../../assets/copy.png";
import styles from "./styles.module.scss";

//simulating data
const qrcode_details = {
  image: qrcode,
  code: "posdkfIOFS78SDFPO9847584podkfg",
};

export const QRCode = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.qrcode_container}>
        <img src={qrcode_details.image} />
      </div>
      <Button color="secondary" variant="contained" className={styles.btn} onClick={handleClick}>
        <span className={styles.btn_text}>Clique para copiar QR CODE</span> <img src={copy} />
      </Button>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: "100%" }}>
          QR CODE copiado com sucesso.
        </Alert>
      </Snackbar>
    </div>
  );
};
