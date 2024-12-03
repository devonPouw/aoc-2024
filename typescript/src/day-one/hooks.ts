export const parseAndSortPairs = (
  content: string
): { array1: number[]; array2: number[] } => {
  const pairs = content
    .split(/\r?\n/)
    .map((line) =>
      line
        .trim()
        .split(/\s+/)
        .map((num) => parseInt(num, 10))
    )
    .filter((pair) => pair.length === 2);

  const array1 = pairs.map((pair) => pair[0]).sort((a, b) => a - b);
  const array2 = pairs.map((pair) => pair[1]).sort((a, b) => a - b);

  return { array1, array2 };
};
