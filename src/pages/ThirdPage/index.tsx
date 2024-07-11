import { CET } from "../../components/CET";
import { Container } from "../../components/Container";
import { Deadline } from "../../components/Deadline";
import { FAQ } from "../../components/FAQ";
import { Footer } from "../../components/Footer";
import { Form } from "../../components/Form";
import { HeaderText } from "../../components/HeaderText";
import { Identifier } from "../../components/Identifier";
import { Logo } from "../../components/Logo";
import styles from "./styles.module.scss";

export const ThirdPage = () => {
  return (
    <Container>
      <Logo />
      <HeaderText text="João, pague o restante em 1x no cartão" />
      <Form />
      <Deadline text="15/12/2021 - 08:17" />
      <CET percentage="0,5" value="31.500,00" />
      <FAQ />
      <Identifier text="2c1b951f356c4680b13ba1c9fc889c47" />
      <Footer />
    </Container>
  );
};
