import { getInput, isPositionValid } from "./hooks";

const directions: [number, number][] = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
  [-1, -1],
  [-1, 1],
  [1, -1],
  [1, 1],
];

function findXmas(grid: string[][]): void {
  const rows = grid.length;
  const cols = grid[0].length;
  const word = "XMAS";
  let answer = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === word[0]) {
        for (const [rowDir, colDir] of directions) {
          let found = true;
          for (let i = 1; i < word.length; i++) {
            const newRow = row + i * rowDir;
            const newCol = col + i * colDir;
            if (
              !isPositionValid(newRow, newCol, rows, cols) ||
              grid[newRow][newCol] !== word[i]
            ) {
              found = false;
              break;
            }
          }
          if (found) {
            answer++;
          }
        }
      }
    }
  }
  console.log(answer);
}

findXmas(getInput);
