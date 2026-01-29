function callBatman(): void {
  console.log("¡Batiseñal!");
}

const callBatmanArrowFunction = (): void => {
  console.log("¡Batiseñal Mejorada!");
};

export const typeVoid = (): void => {
  callBatman();

  callBatmanArrowFunction();

  console.log("--- END TYPE VOID ---");
};
