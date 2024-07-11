import { CET } from "../../components/CET";
import { Container } from "../../components/Container";
import { FAQ } from "../../components/FAQ";
import { Footer } from "../../components/Footer";
import { HeaderText } from "../../components/HeaderText";
import { Logo } from "../../components/Logo";
import { QRCode } from "../../components/QRCode";

export const SecondPage = () => {
  return (
    <Container>
      <Logo />
      <HeaderText text="João, pague a entrada de R$ 15.300,00 pelo Pix" />
      <QRCode />
      <CET percentage="0,5" value="30.600,00" />
      <FAQ />
      <Footer />
    </Container>
  );
};
