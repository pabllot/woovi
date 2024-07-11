import { CET } from "../../components/CET";
import { Container } from "../../components/Container";
import { FAQ } from "../../components/FAQ";
import { Footer } from "../../components/Footer";
import { Form } from "../../components/Form";
import { HeaderText } from "../../components/HeaderText";
import { Logo } from "../../components/Logo";
import styles from "./styles.module.scss";

export const ThirdPage = () => {
  return (
    <Container>
      <Logo />
      <HeaderText text="João, pague o restante em 1x no cartão" />
      <Form />
      <CET percentage="0,5" value="31.500,00" />
      <FAQ />
      <Footer />
    </Container>
  );
};
