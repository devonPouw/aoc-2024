import FileReader from "../file-reader/file-reader";
import { calculateSum } from "./hooks";

const filePath = "./src/day-three/input.txt";
const content = FileReader.readFile(filePath, FileReader.parseLines);

const validMulArray = content.flatMap(
  (line) => line.match(/mul\(\d+,\d+\)/g) || []
);

console.log(calculateSum(validMulArray));
