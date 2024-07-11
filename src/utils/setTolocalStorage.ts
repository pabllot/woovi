export const setToLocalStorage = (times: number) => {
  localStorage.setItem("numberOfInstallments", JSON.stringify(times));
};
