import { create, StateCreator } from "zustand";
import { Installment } from "../types";
import { formatDate } from "../utils/formatDate";

interface InstallmentState {
  installment: Installment | null;
  deadline: string | null;
  setInstallment: (installment: Installment) => void;
}

const persistMiddleware: StateCreator<InstallmentState> = (set, _, __) => ({
  installment: JSON.parse(localStorage.getItem("installment") || "null"),
  deadline: localStorage.getItem("deadline"),
  setInstallment: (installment: Installment) => {
    // Calculate the deadline 15 minutes from now
    const now = new Date();
    now.setMinutes(now.getMinutes() + 15);
    const deadline = formatDate(now);

    set({ installment, deadline });
    localStorage.setItem("installment", JSON.stringify(installment));
    localStorage.setItem("deadline", deadline);
  },
});

const useStore = create<InstallmentState>(persistMiddleware);

export default useStore;
