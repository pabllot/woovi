const values = ["30.500,00", "15.300,00", "10.196,66", "7.725,00", "6.300,00", "5.286,33", "4.542,85"];

export const findValue = (number: number) => {
  return values[number - 1];
};
