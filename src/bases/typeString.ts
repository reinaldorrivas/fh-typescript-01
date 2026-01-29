export const typeString = (): void => {
  const batman = "Batman";
  const greenLantern = "Green Lantern";
  const drManhatthan = "Dr. Manhattan";

  console.log(`I'm ${batman}`);
  console.log(greenLantern.toUpperCase());
  console.log(drManhatthan[20]?.toUpperCase() || "No se encuentra algún caracter en esa posición.");

  console.log("--- END TYPE STRING ---");
};
