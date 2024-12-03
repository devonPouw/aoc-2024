import FileReader from "../file-reader/file-reader";
import { parseLines } from "./hooks";

const filePath = "./src/day-two/input.txt";

const isLineSafe = (line: number[]): boolean => {
  if (line.length < 2) return true;

  let trend: "increasing" | "decreasing" | null = null;

  for (let i = 0; i < line.length - 1; i++) {
    const difference = line[i + 1] - line[i];

    if (Math.abs(difference) > 3 || difference === 0) {
      return false;
    }

    if (trend === null) {
      trend = difference > 0 ? "increasing" : "decreasing";
    } else if (
      (trend === "increasing" && difference < 0) ||
      (trend === "decreasing" && difference > 0)
    ) {
      return false;
    }
  }

  return true;
};

const result = FileReader.readFile(filePath, parseLines);

let safeCount = 0;
result.forEach((line) => {
  const safe = isLineSafe(line);
  if (safe) safeCount++;
});

console.log(safeCount);
