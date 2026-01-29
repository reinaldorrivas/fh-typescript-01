export const typeAny = (): void => {

  let a: any = 123;

  a = "René Rivas";

  /* Esto se conoce como casting */
  console.log((a as string).charAt(0));

  a = 150.54132;

  console.log((a as number).toFixed(2));

  console.log("--- END TYPE ANY ---");
};
