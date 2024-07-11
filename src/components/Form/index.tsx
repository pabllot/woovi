import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";

import { Container } from "../Container";
import { options } from "../../constants/select_options";
import styles from "./styles.module.scss";

export const Form = () => {
  return (
    <Container>
      <div className={styles.form}>
        <TextField
          id="outlined-read-only-input"
          label="Nome completo"
          defaultValue="João Linaldo Dias Fraga Santos"
          InputProps={{
            readOnly: true,
          }}
          className={styles.input}
        />
        <TextField
          id="outlined-read-only-input"
          label="CPF"
          defaultValue="405.503.503-15"
          InputProps={{
            readOnly: true,
          }}
          className={styles.input}
        />
        <TextField
          id="outlined-read-only-input"
          label="Número do cartão"
          defaultValue="405.503.503-15"
          InputProps={{
            readOnly: true,
          }}
          className={styles.input}
        />
        <TextField
          id="outlined-read-only-input"
          label="Número do cartão"
          defaultValue="405.503.503-15"
          InputProps={{
            readOnly: true,
          }}
          className={styles.input}
        />
        <div className={styles.twoInARow}>
          <TextField
            id="outlined-read-only-input"
            label="Vencimento"
            defaultValue="10/11"
            InputProps={{
              readOnly: true,
            }}
            className={styles.input}
          />
          <TextField
            id="outlined-read-only-input"
            label="CVV"
            defaultValue="405"
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
          Pagar
        </Button>
      </div>
    </Container>
  );
};
