export const setToLocalStorage = (installment: any) => {
  localStorage.setItem("chosenInstallment", JSON.stringify(installment));
};
