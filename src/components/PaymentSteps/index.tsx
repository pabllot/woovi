import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";

import { payments } from "../../data/payment_steps";
import { findValue } from "../../utils/findValue";
import useStore from "../../store";

export const PaymentSteps = ({ active }: { active: number }) => {
  const installment = useStore((state) => state.installment);

  return (
    <Box>
      <Stepper activeStep={active} orientation="vertical">
        {payments.slice(0, installment?.times).map((payment, index) => (
          <Step key={index}>
            <StepLabel>
              <Box display="flex" justifyContent="space-between" width="100%">
                <Typography sx={{ fontWeight: 600, fontSize: "18px", color: "#4D4D4D" }}>{payment.text}</Typography>
                <Typography sx={{ fontWeight: 800, fontSize: "18px", color: "#4D4D4D" }}>R$ {findValue(installment ? installment.times : 0)}</Typography>
              </Box>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
