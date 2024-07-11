import { useState } from "react";

import { Footer } from "../../components/Footer";
import { Installment } from "../../types";
import { HeaderText } from "../../components/HeaderText";
import { InstallmentCard } from "../../components/InstallmentCard";
import { Logo } from "../../components/Logo";
import { data } from "../../data/mock.json";
import { Container } from "../../components/Container";

export const FirstPage = () => {
  const [selectedCard, setSelectedCard] = useState(2);

  return (
    <Container>
      <Logo />
      <HeaderText text="João, como você quer pagar?" />
      <div>
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
            onClick={() => setSelectedCard(installment.times)}
          />
        ))}
      </div>
      <Footer />
    </Container>
  );
};
