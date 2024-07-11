export interface Installment {
  id?: number;
  times: number;
  value: string;
  bonus: string | null;
  tag: string | null;
  observation: string | null;
  total: string | null;
}

export interface InstallmentCardProps extends Installment {
  isSelected: boolean;
  onClick: () => void;
}
