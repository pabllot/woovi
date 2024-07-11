import { Button } from "@mui/material";
import { CET } from "../../components/CET";
import { Container } from "../../components/Container";
import { Deadline } from "../../components/Deadline";
import { FAQ } from "../../components/FAQ";
import { Footer } from "../../components/Footer";
import { HeaderText } from "../../components/HeaderText";
import { Identifier } from "../../components/Identifier";
import { Logo } from "../../components/Logo";
import { QRCode } from "../../components/QRCode";
import { Link } from "react-router-dom";
import { PaymentSteps } from "../../components/PaymentSteps";
import { deadline, identifier } from "../../constants";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { user } from "../../data/user";

export const SecondPage = () => {
  const [installments] = useLocalStorage<any>("chosenInstallment", []);
  const firstName = user.name.split(" ")[0];

  return (
    <Container>
      <Logo />
      <HeaderText text={`${firstName}, pague a entrada de R$${installments.value} pelo Pix`} />
      <QRCode />
      <Deadline text={deadline} />
      <PaymentSteps isSelected={0} isOnGoing={1} />
      <CET percentage="0,5" value={installments.total} />
      <FAQ />
      <Identifier text={identifier} />

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
