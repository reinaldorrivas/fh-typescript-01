export const typeTuple = (): void => {
  const heroe: [string, number, boolean] = ["Dr. Strange", 100, false];

  heroe[0] = "Ironman";
  heroe[1] = 70;
  heroe[2] = true;

  console.log(heroe);

  const [heroeName, power, canBeBad] = heroe;

  console.log({ heroeName, power, canBeBad });

  /*
   * Cuando una función devuelve varios valores dentro de un array, una tupla permite
   * especificar el tipo y el orden exacto de cada elemento. Esto garantiza que los
   * valores retornados se usen correctamente y en la posición esperada.
   */

  console.log("--- END TYPE TUPLE ---");
};
