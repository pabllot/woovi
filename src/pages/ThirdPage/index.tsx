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
import { user } from "../../data/user";
import useStore from "../../store";

export const ThirdPage = () => {
  const installment = useStore((state) => state.installment);
  const deadline = useStore((state) => state.deadline);
  const firstName = user.name.split(" ")[0];

  return (
    <Container>
      <Logo />
      <HeaderText text={`${firstName}, pague o restante em ${installment ? installment?.times - 1 : "1"}x no cartão`} />
      <Form />
      <Deadline text={deadline || ""} />
      <PaymentSteps isSelected={1} isOnGoing={2} />
      <CET percentage="0,5" value={installment?.total || ""} />
      <FAQ />
      <Button color="warning" variant="contained" component={Link} to="/2">
        <span style={{ fontSize: "16px", fontWeight: "700" }}>Voltar</span>
      </Button>
      <Identifier text={user.identifier} />
      <Footer />
    </Container>
  );
};
