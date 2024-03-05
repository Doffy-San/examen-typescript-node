import { readFileSync } from "fs";

function getStatistics(): { meanAge: number, meanHeight: number|string } {
  const persons: Array<{ age: number, taille: number }> = JSON.parse(readFileSync("./persons.json").toString());

  let totalAge: number = 0;
  let totalHeight: number = 0;

  // Vérifier si le premier élément possède les propriétés "age" et "taille"
  if (!Object.hasOwn(persons[0], "age") || !Object.hasOwn(persons[0], "taille")) {
    return { meanAge: NaN, meanHeight: "Données incorrectes" };
  }

  for (const person of persons) {
    totalAge += person.age;
    totalHeight += person.taille;
  }

  const meanAge: number = totalAge / persons.length;
  const meanHeight: number = totalHeight / persons.length;

  return {
    meanAge,
    meanHeight,
  };
}

const stats = getStatistics();
console.log("L'âge moyen est de", stats.meanAge);
console.log("La taille moyenne est de", stats.meanHeight);

function displayResult() {
  console.log(getStatistics());
}
displayResult();
