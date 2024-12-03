import FileReader from "../file-reader/file-reader";
import { parseLines } from "./hooks";

const calculateDifferences = (sequence: number[]): number[] => {
  return sequence.slice(1).map((val, i) => val - sequence[i]);
};

const isValidDecreasing = (differences: number[]): boolean => {
  return differences.every((diff) => diff >= -3 && diff <= -1);
};

const isValidIncreasing = (differences: number[]): boolean => {
  return differences.every((diff) => diff >= 1 && diff <= 3);
};

const advancedCheck = (sequence: number[]): boolean => {
  for (let i = 0; i < sequence.length; i++) {
    const modifiedSequence = [...sequence];
    modifiedSequence.splice(i, 1);
    const newDifferences = calculateDifferences(modifiedSequence);

    const isDecreasing =
      Math.sign(modifiedSequence[1] - modifiedSequence[0]) === -1;
    if (
      (isDecreasing && isValidDecreasing(newDifferences)) ||
      (!isDecreasing && isValidIncreasing(newDifferences))
    ) {
      return true;
    }
  }
  return false;
};

const isSafe = (sequence: number[]): boolean => {
  const differences = calculateDifferences(sequence);

  const isDecreasing = Math.sign(sequence[1] - sequence[0]) === -1;
  if (isDecreasing) {
    return isValidDecreasing(differences) || advancedCheck(sequence);
  } else {
    return isValidIncreasing(differences) || advancedCheck(sequence);
  }
};

const filePath = "src/day-two/input.txt";
const sequences = FileReader.readFile(filePath, parseLines);
const safeCount = sequences.reduce(
  (count, sequence) => count + (isSafe(sequence) ? 1 : 0),
  0
);

console.log(safeCount);
