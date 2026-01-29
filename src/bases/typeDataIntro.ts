const sayHello = (msg: string) => {
  console.log(`${msg} René Rivas.`);
};

export const typeDataIntro = () => {
  const a: number = 10;

  /*
   * Esto evita que sea tipo <<any>>.
   */
  let b: string;

  b = "Hola";

  console.log({ a, b });

  sayHello(b);

    console.log("--- END TYPE DATA INTRO ---");
};
