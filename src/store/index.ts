import { create, StateCreator } from "zustand";

import { Installment } from "../types";

interface InstallmentState {
  installment: Installment | null;
  setInstallment: (installment: Installment) => void;
}

const persistMiddleware: StateCreator<InstallmentState> = (set, _, __) => ({
  installment: JSON.parse(localStorage.getItem("installment") || "null"),
  setInstallment: (installment: Installment) => {
    set({ installment });
    localStorage.setItem("installment", JSON.stringify(installment));
  },
});

const useStore = create<InstallmentState>(persistMiddleware);

export default useStore;
