const possibleError = (message: string, flag: boolean): never | string => {
  if (flag) {
    throw new Error(message);
  }

  return "Todo bien.";
};

export const typeNever = (): void => {
  /*
   * El tipo `never` indica que una función no puede completar su ejecución
   * de forma normal. Esto ocurre cuando lanza una excepción o entra en un
   * flujo que nunca retorna. En este caso, si `flag` es true, la función
   * termina con un `throw` y su tipo es `never`.
   */
  console.log(possibleError("Todo mal.", false));

  console.log("--- END TYPE NEVER ---");
};
