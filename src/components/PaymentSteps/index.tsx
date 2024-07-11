import { payments } from "../../data/payment_steps";
import { findValue } from "../../utils/findValue";
import { PaymentStepLine } from "../PaymentStepLine";
import useStore from "../../store";

export const PaymentSteps = ({ isSelected, isOnGoing }: any) => {
  const installment = useStore((state) => state.installment);

  return (
    <div>
      {payments.slice(0, installment?.times).map((payment) => (
        <PaymentStepLine
          key={payment.id}
          text={payment.text}
          value={findValue(installment ? installment.times : 0)}
          isSelected={isSelected === payment.id}
          isOnGoing={isOnGoing === payment.id}
        />
      ))}
    </div>
  );
};
