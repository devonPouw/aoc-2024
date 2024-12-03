const mul = (a: number, b: number): number => a * b;

export const calculateSum = (array: string[]): number => {
  return array.reduce((acc, line) => {
    const [a, b] = line.match(/\d+/g)!.map(Number);
    return acc + mul(a, b);
  }, 0);
};
