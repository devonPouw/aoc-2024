import { getInput, isPositionValid } from "./hooks";

const directions: [number, number][] = [
  [-1, -1],
  [-1, 1],
  [1, -1],
  [1, 1],
];

function findXmas(grid: string[][]): void {
  const rows = grid.length;
  const cols = grid[0].length;
  let answer = 0;

  const validPatterns = [
    ["M", "S", "M", "S"],
    ["S", "M", "S", "M"],
    ["M", "M", "S", "S"],
    ["S", "S", "M", "M"],
  ];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === "A") {
        const diagonals = directions.map(([rowDir, colDir]) =>
          isPositionValid(row + rowDir, col + colDir, rows, cols)
            ? grid[row + rowDir][col + colDir]
            : null
        );

        if (
          diagonals.every((value) => value !== null) &&
          validPatterns.some((pattern) =>
            pattern.every((val, index) => val === diagonals[index])
          )
        ) {
          answer++;
        }
      }
    }
  }
  console.log(answer);
}

findXmas(getInput);
