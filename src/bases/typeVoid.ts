export const typeVoid = (): void => {
  function callBatman(): void {
    console.log("¡Batiseñal!");
  }

  callBatman();

  const callBatmanArrowFunction = (): void => {
    console.log("¡Batiseñal Mejorada!");
  };

  callBatmanArrowFunction();

  console.log("--- END TYPE VOID ---");
};
