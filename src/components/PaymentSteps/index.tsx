import { payments } from "../../data/payment_steps";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { findValue } from "../../utils/findValue";
import { PaymentStepLine } from "../PaymentStepLine";

export const PaymentSteps = ({ isSelected, isOnGoing }: any) => {
  const [installments] = useLocalStorage<number>("numberOfInstallments", 0);

  return (
    <div>
      {payments.slice(0, installments).map((payment) => (
        <PaymentStepLine text={payment.text} value={findValue(installments)} isSelected={isSelected === payment.id} isOnGoing={isOnGoing === payment.id} />
      ))}
    </div>
  );
};
