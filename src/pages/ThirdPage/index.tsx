import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import { CET } from "../../components/CET";
import { Container } from "../../components/Container";
import { Deadline } from "../../components/Deadline";
import { FAQ } from "../../components/FAQ";
import { Footer } from "../../components/Footer";
import { Form } from "../../components/Form";
import { HeaderText } from "../../components/HeaderText";
import { Identifier } from "../../components/Identifier";
import { Logo } from "../../components/Logo";
import { PaymentSteps } from "../../components/PaymentSteps";
import { headline_page_three, identifier } from "../../constants";

export const ThirdPage = () => {
  return (
    <Container>
      <Logo />
      <HeaderText text={headline_page_three} />
      <Form />
      <Deadline text="15/12/2021 - 08:17" />
      <PaymentSteps isSelected={1} isOnGoing={2} />
      <CET percentage="0,5" value="31.500,00" />
      <FAQ />
      <Button color="warning" variant="contained" component={Link} to="/2">
        <span style={{ fontSize: "16px", fontWeight: "700" }}>Voltar</span>
      </Button>
      <Identifier text={identifier} />
      <Footer />
    </Container>
  );
};
