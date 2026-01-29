export const typeAny = (): void => {
  let a: any = 123;

  a = "René Rivas";

  /* Esto se conoce como casting */
  console.log("La variable cambió a <string>: ", a);
  console.log(
    "Por medio del casting, pude usar propiedades de los strings:",
    (a as string).charAt(0),
  );

  a = 150.54132;

  console.log("La variable cambió a <number>: ", a);
  console.log(
    "Por medio del casting, pude usar propiedades de los números:",
    (a as number).toFixed(2),
  );

  console.log("--- END TYPE ANY ---");
};
