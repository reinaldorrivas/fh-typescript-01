export const typeTuple = () => {
  const heroe: [string, number, boolean] = ["Dr. Strange", 100, false];

  heroe[0] = "Ironman";
  heroe[1] = 70;
  heroe[2] = true;

  console.log(heroe);

  const [heroeName, power, canBeBad] = heroe;

  console.log({ heroeName, power, canBeBad });

  console.log("--- END TYPE TUPLE ---");
};
