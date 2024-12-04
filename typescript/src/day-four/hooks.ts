import FileReader from "../file-reader/file-reader";

export function isPositionValid(
  row: number,
  col: number,
  rows: number,
  cols: number
): boolean {
  return row >= 0 && row < rows && col >= 0 && col < cols;
}

const filePath = "src/day-four/input.txt";

export const getInput: string[][] = FileReader.readFile(
  filePath,
  FileReader.parseLines
)
  .map((line) => line.split(" "))
  .map((line) => {
    return line.flatMap((word) => word.split(""));
  });
