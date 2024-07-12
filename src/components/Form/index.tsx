import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputMask from "react-input-mask";
import { Button } from "@mui/material";

import { options } from "../../data/select_options";
import styles from "./styles.module.scss";
import useStore from "../../store";
import { findValue } from "../../utils/findValue";

export const Form = () => {
  const installment = useStore((state) => state.installment);

  return (
    <div className={styles.wrapper}>
      <TextField label="Nome completo" className={styles.input} />
      {/* @ts-ignore */}
      <InputMask mask="999.999.999-99">{() => <TextField id="cpf-input" label="CPF" className={styles.input} variant="outlined" />}</InputMask>
      <InputMask mask="9999 9999 9999 9999" alwaysShowMask={false}>
        {/* @ts-ignore */}
        {(inputProps) => <TextField {...inputProps} id="credit-card-input" label="Número do cartão" className={styles.input} variant="outlined" />}
      </InputMask>{" "}
      <div className={styles.twoInARow}>
        <InputMask mask="99/99" alwaysShowMask={false}>
          {/* @ts-ignore */}
          {(inputProps) => <TextField {...inputProps} id="expiration-date-input" label="Vencimento (MM/AA)" className={styles.input} variant="outlined" />}
        </InputMask>{" "}
        <TextField label="CVV" className={styles.input} inputProps={{ maxLength: 3 }} />
      </div>
      <TextField select defaultValue="1" className={styles.input}>
        {options.slice(0, (installment?.times || 0) - 1).map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label + findValue(installment ? installment.times : 0)}
          </MenuItem>
        ))}
      </TextField>
      <Button color="secondary" variant="contained">
        <span className={styles.btn}>Pagar</span>
      </Button>
    </div>
  );
};
