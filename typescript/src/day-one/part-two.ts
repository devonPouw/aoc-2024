import FileReader from "../file-reader/file-reader";
import { parseAndSortPairs } from "./hooks";

const filePath = "./src/day-one/input.txt";

const calculateMatchingSum = (content: string): number => {
  const { array1, array2 } = parseAndSortPairs(content);

  const frequencyMap: { [key: number]: number } = {};
  array2.forEach((num) => {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  });

  return array1.reduce((accumulator, element1) => {
    if (frequencyMap[element1]) {
      return accumulator + element1 * frequencyMap[element1];
    }
    return accumulator;
  }, 0);
};

const sum = FileReader.readFile(filePath, calculateMatchingSum);
console.log(sum);
