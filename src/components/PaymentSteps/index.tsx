import { payments } from "../../data/payment_steps";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { PaymentStepLine } from "../PaymentStepLine";

export const PaymentSteps = ({ isSelected, isOnGoing }: any) => {
  const [installments] = useLocalStorage<number>("numberOfInstallments", 0);

  return (
    <div>
      {payments.slice(0, installments).map((payment) => (
        <PaymentStepLine text={payment.text} value={payment.value} isSelected={isSelected === payment.id} isOnGoing={isOnGoing === payment.id} />
      ))}
    </div>
  );
};
