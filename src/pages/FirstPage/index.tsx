import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import { Footer } from "../../components/Footer";
import { Installment } from "../../types";
import { HeaderText } from "../../components/HeaderText";
import { InstallmentCard } from "../../components/InstallmentCard";
import { Logo } from "../../components/Logo";
import { data } from "../../data/mock.json";
import { Container } from "../../components/Container";
import { user } from "../../data/user";
import useStore from "../../store";

export const FirstPage = () => {
  const setInstallment = useStore((state) => state.setInstallment);
  const installment = useStore((state) => state.installment);
  const [selectedCard, setSelectedCard] = useState(installment?.times || 2);
  const firstName = user.name.split(" ")[0];

  const handleConfirm = (installment: Installment) => {
    setInstallment(installment);
  };

  return (
    <Container>
      <Logo />
      <HeaderText text={`${firstName}, como você quer pagar?`} />
      <div style={{ paddingBottom: ".5rem" }}>
        {data.map((installment: Installment) => (
          <InstallmentCard
            key={installment.id}
            tag={installment.tag}
            observation={installment.observation}
            bonus={installment.bonus}
            times={installment.times}
            value={installment.value}
            total={installment.total}
            isSelected={selectedCard === installment.times}
            onClick={() => {
              setSelectedCard(installment.times), handleConfirm(installment);
            }}
          />
        ))}
      </div>
      <Button color="secondary" variant="contained" component={Link} to="/2">
        <span style={{ fontSize: "16px" }}>Continuar com o pagamento</span>
      </Button>
      <Footer />
    </Container>
  );
};
