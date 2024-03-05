import { readFileSync } from "fs";

function getStatistics(): { meanAge: number, meanHeight: number } {
  const persons: any[] = JSON.parse(readFileSync("./persons.json").toString());

  let totalAge: number = 0;
  let totalHeight: number = 0;

  for (const person of persons) {
    totalAge += person.age;
    totalHeight += person.height;
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
