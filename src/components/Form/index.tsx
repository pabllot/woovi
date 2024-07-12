import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";

import { options } from "../../data/select_options";
import styles from "./styles.module.scss";
import { user } from "../../data/user";

export const Form = () => {
  return (
    <div className={styles.wrapper}>
      <TextField
        id="outlined-read-only-input"
        label="Nome completo"
        defaultValue={user.name}
        InputProps={{
          readOnly: true,
        }}
        className={styles.input}
      />
      <TextField
        id="outlined-read-only-input"
        label="CPF"
        defaultValue={user.cpf}
        InputProps={{
          readOnly: true,
        }}
        className={styles.input}
      />
      <TextField
        id="outlined-read-only-input"
        label="Número do cartão"
        defaultValue="4059 5403 5503 5845"
        InputProps={{
          readOnly: true,
        }}
        className={styles.input}
      />
      <div className={styles.twoInARow}>
        <TextField
          id="outlined-read-only-input"
          label="Vencimento"
          defaultValue={user.dueTo}
          InputProps={{
            readOnly: true,
          }}
          className={styles.input}
        />
        <TextField
          id="outlined-read-only-input"
          label="CVV"
          defaultValue={user.securityNumber}
          InputProps={{
            readOnly: true,
          }}
          className={styles.input}
        />
      </div>
      <TextField id="outlined-read-only-input" select defaultValue="1" className={styles.input}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Button color="secondary" variant="contained">
        <span className={styles.btn}>Pagar</span>
      </Button>
    </div>
  );
};
