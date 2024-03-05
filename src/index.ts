import { readFileSync } from "fs";

function getStatistics(): number{
  const persons: number = JSON.parse(readFileSync("./persons.json").toString());
  return persons;
}

function displayResult() {
  console.log(getStatistics());
}
displayResult();
