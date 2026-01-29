export const TypeArray = (): void => {
  const numbersWithStrings: (string | number)[] = [1, 2, "3", 4, 5];
  const numbers: number[] = [1, 2, 3, 4, 5];

  console.log({ numbersWithStrings, numbers });

  const villains: string[] = ["Omega Rojo", "Dormammu", "Duende Verde"];

  villains.forEach((villiain) => {
    console.log(villiain.toUpperCase());
  });

  console.log("--- END TYPE ARRAY ---");
};
