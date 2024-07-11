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
import { headline_page_one } from "../../constants";
import { setToLocalStorage } from "../../utils/setTolocalStorage";

export const FirstPage = () => {
  const [selectedCard, setSelectedCard] = useState(2);

  return (
    <Container>
      <Logo />
      <HeaderText text={headline_page_one} />
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
              setSelectedCard(installment.times), setToLocalStorage(installment);
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
