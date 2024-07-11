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

export const SecondPage = () => {
  return (
    <Container>
      <Logo />
      <HeaderText text="João, pague a entrada de R$15.300,00 pelo Pix" />
      <QRCode />
      <Deadline text="15/12/2021 - 08:17" />
      <CET percentage="0,5" value="30.600,00" />
      <FAQ />
      <Identifier text="2c1b951f356c4680b13ba1c9fc889c47" />
      <Button color="secondary" variant="contained" component={Link} to="/3">
        <span style={{ fontSize: "16px" }}>Continuar com o pagamento</span>
      </Button>
      <Footer />
    </Container>
  );
};
