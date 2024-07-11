import { ReactNode } from "react";

import styles from "./styles.module.scss";

interface Props {
  children: ReactNode;
}
export const Container = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};
