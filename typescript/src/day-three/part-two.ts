import FileReader from "../file-reader/file-reader";
import { calculateSum } from "./hooks";

const filePath = "./src/day-three/input.txt";
const content = FileReader.readFile(filePath, FileReader.parseLines);

const data = content.flatMap(
  (line) => line.match(/mul\(\d+,\d+\)|do\(\)|don't\(\)/g) || []
);

let isEnabled = true;

const validMulArray: string[] = [];

for (const line of data) {
  if (line === "do()") {
    isEnabled = true;
  } else if (line === "don't()") {
    isEnabled = false;
  } else if (isEnabled && line.includes("mul")) {
    validMulArray.push(line);
  }
}

console.log(calculateSum(validMulArray));
