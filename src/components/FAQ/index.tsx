import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import styles from "./styles.module.scss";

export const FAQ = () => {
  return (
    <div className={styles.wrapper}>
      <Accordion className={styles.accordion}>
        <AccordionSummary className={styles.summary} expandIcon={<ExpandLessIcon />} aria-controls="panel2-content" id="panel2-header">
          <Typography className={styles.title}>Como funciona?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Pagamento de forma rápida e segura com a woovi.</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
