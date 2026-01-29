export const typeBoolean = (): void => {
  let isSuperman: boolean = true;
  let isSuperHero: boolean;

  isSuperHero = isSuperman || false;
  console.log({ isSuperHero });

  console.log("--- END TYPE BOOLEAN ---");
};
