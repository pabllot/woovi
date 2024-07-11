import { payments } from "../../data/payment_steps";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { findValue } from "../../utils/findValue";
import { PaymentStepLine } from "../PaymentStepLine";

export const PaymentSteps = ({ isSelected, isOnGoing }: any) => {
  const [installments] = useLocalStorage<any>("chosenInstallment", []);

  return (
    <div>
      {payments.slice(0, installments.times).map((payment) => (
        <PaymentStepLine
          key={payment.id}
          text={payment.text}
          value={findValue(installments.times)}
          isSelected={isSelected === payment.id}
          isOnGoing={isOnGoing === payment.id}
        />
      ))}
    </div>
  );
};
