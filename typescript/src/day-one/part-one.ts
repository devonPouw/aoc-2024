import FileReader from "../file-reader/file-reader";
import { parseAndSortPairs } from "./hooks";

const filePath = "./src/day-one/input.txt";

const calculateSum = (content: string): number => {
  const { array1, array2 } = parseAndSortPairs(content);

  return array1.reduce((accumulator, element1, index) => {
    const element2 = array2[index];
    return accumulator + Math.abs(element1 - element2);
  }, 0);
};

const sum = FileReader.readFile(filePath, calculateSum);
console.log(sum);
