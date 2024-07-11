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
import { identifier } from "../../constants";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { user } from "../../data/user";

export const ThirdPage = () => {
  const [installments] = useLocalStorage<any>("chosenInstallment", []);
  const firstName = user.name.split(" ")[0];

  return (
    <Container>
      <Logo />
      <HeaderText text={`${firstName}, pague o restante em ${installments.times - 1}x no cartão`} />
      <Form />
      <Deadline text="15/12/2021 - 08:17" />
      <PaymentSteps isSelected={1} isOnGoing={2} />
      <CET percentage="0,5" value={installments.total} />
      <FAQ />
      <Button color="warning" variant="contained" component={Link} to="/2">
        <span style={{ fontSize: "16px", fontWeight: "700" }}>Voltar</span>
      </Button>
      <Identifier text={identifier} />
      <Footer />
    </Container>
  );
};
