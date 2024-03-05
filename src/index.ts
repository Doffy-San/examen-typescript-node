import { readFileSync } from "fs";

function getStatistics(): number {
  const persons: any[] = JSON.parse(readFileSync("./persons.json").toString());
  let maxAge = 0;
  for (const person of persons) {
    if (person.age > maxAge) {
      maxAge = person.age;
    }
  }
  return maxAge;
}

const ageMax = getStatistics();
console.log("L'âge maximal est de", ageMax);

function displayResult() {
  console.log(getStatistics());
}
displayResult();
