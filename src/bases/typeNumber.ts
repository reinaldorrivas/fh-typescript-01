export const typeNumber = (): void => {
  let avengers: number = 10;

  const villians: number = 20;

  /*
   * Si no se definiera un tipo de dato para avengers, daría un error porque posiblemente
   * la variable pudiera ser undefined y eso no permite una comparación válida entre números.
   */
  if (avengers < villians) {
    console.log("Estamos en problemas.");
  } else {
    console.log("Nos salvamos.");
  }

  /*
   * Esto daría NaN que también es considerado un número, así que TypeScript no es infalible.
   * NaN pudiera ocasionar errores difíciles de rastrear, así que habría qué hacer las validaciones respectivas.
   */
  avengers = Number("55A");

  console.log({ avengers });

  console.log("--- END TYPE NUMBER ---");
};
