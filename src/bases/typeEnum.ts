export const typeEnum = () => {
  /*
   * Permite definir un conjunto de nombres significativos asociados a valores constantes
   * (numéricos por defecto) dentro del contexto de un módulo o programa. Se utiliza para
   * asegurar que solo se empleen valores predefinidos y tipados en ciertas partes del código.
   */
  enum Frutas {
    fresa,
    manzana,
    naranja,
  }

  console.log({ Frutas });

  console.log("--- END TYPE ENUM ---");
};
