import { readFileSync } from "fs";

function getStatistics(): number{
  const persons = JSON.parse(readFileSync("./persons.json").toString());
  return persons.length;
}

function displayResult() {
  console.log(getStatistics());
}
displayResult();
