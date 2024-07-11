import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import PaymentsIcon from "@mui/icons-material/Payments";
import AddCardIcon from "@mui/icons-material/AddCard";
import PixIcon from "@mui/icons-material/Pix";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: "linear-gradient( 95deg,#03d69d 0%,#15c495 50%,#12755b 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: "linear-gradient( 95deg,#03d69d 0%,#15c495 50%,#12755b 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage: "linear-gradient( 95deg,#03d69d 0%,#15c495 50%,#12ac83 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage: "linear-gradient( 95deg,#03d69d 0%,#15c495 50%,#12ac83 100%)",
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <PaymentsIcon />,
    2: <PixIcon />,
    3: <AddCardIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = ["Parcelas", "PIX", "Cartão"];

export default function CustomizedSteppers({ selectedCard }: { selectedCard: number }) {
  console.log(selectedCard);
  return (
    <Stack sx={{ width: "100%" }} spacing={4}>
      <Stepper alternativeLabel activeStep={selectedCard} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              <span style={{ fontWeight: "600" }}>{label}</span>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
