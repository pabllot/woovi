import { Bonus } from "../Bonus";
import { InstallmentCardValues } from "../InstallmentCardValues";
import { Observation } from "../Observation";
import { Tag } from "../Tag";
import { Total } from "../Total";
import { CheckButton } from "../CheckButton";
import styles from "./styles.module.scss";
import { InstallmentCardProps } from "../../types";

export const InstallmentCard = ({ tag, observation, bonus, times, value, total, isSelected, onClick }: InstallmentCardProps) => {
  return (
    <div className={`${styles.wrapper} ${isSelected ? styles.borderHighlighted : ""} ${times === 1 && styles.isFirst}`} onClick={onClick}>
      {tag && <Tag text={tag} />}
      <InstallmentCardValues times={times} value={value} />
      <CheckButton isSelected={isSelected} />
      {bonus && <Bonus text={bonus} />}
      {total && <Total text={total} />}
      {observation && <Observation text={observation} isSelected={isSelected} />}
    </div>
  );
};
