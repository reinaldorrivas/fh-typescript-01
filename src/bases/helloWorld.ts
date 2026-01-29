export const helloWorld = (): void => {
  const msg: string = "Hola mundo";

  console.log({ msg });

  const hero = {
    name: "Ironman",
    age: 45,
  };

  console.log(hero);

  /*
   * TypeScript infiere los tipos de datos de una variable lo mejor que puede y,
   * a partir de allí, trata de mantener esas reglas.
   */

  hero.age = 50;

  console.log("--- END HELLO WORLD ---");
};
