import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import { CET } from "../../components/CET";
import { Container } from "../../components/Container";
import { Deadline } from "../../components/Deadline";
import { FAQ } from "../../components/FAQ";
import { Footer } from "../../components/Footer";
import { HeaderText } from "../../components/HeaderText";
import { Identifier } from "../../components/Identifier";
import { Logo } from "../../components/Logo";
import { QRCode } from "../../components/QRCode";
import { PaymentSteps } from "../../components/PaymentSteps";
import { user } from "../../data/user";
import useStore from "../../store";

export const SecondPage = () => {
  const installment = useStore((state) => state.installment);
  const deadline = useStore((state) => state.deadline);
  const firstName = user.name.split(" ")[0];

  return (
    <Container>
      <Logo />
      <HeaderText text={`${firstName}, pague a entrada de R$${installment?.value} pelo Pix`} />
      <QRCode />
      <Deadline text={deadline || ""} />
      <PaymentSteps active={0} />
      <CET percentage="0,5" value={installment?.total ? installment.total : ""} />
      <FAQ />
      <Identifier text={user.identifier} />

      <Button color="secondary" variant="contained" component={Link} to="/3">
        <span style={{ fontSize: "16px" }}>Continuar com o pagamento</span>
      </Button>

      <Button color="warning" variant="contained" component={Link} to="/">
        <span style={{ fontSize: "16px", fontWeight: "700" }}>Voltar</span>
      </Button>

      <Footer />
    </Container>
  );
};
