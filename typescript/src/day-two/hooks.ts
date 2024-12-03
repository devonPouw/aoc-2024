export const parseLines = (content: string): number[][] => {
  return content.split(/\r?\n/).map((line) =>
    line
      .trim()
      .split(/\s+/)
      .map((num) => parseInt(num, 10))
  );
};
