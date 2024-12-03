import * as fs from "fs";
import * as path from "path";

type ParserFunction<T> = (content: string) => T;

class FileReader {
  /**
   * Reads a file and parses its content with a given parser function.
   * @param filePath - The relative path to the file.
   * @param parser - A parser function to process the file content.
   * @returns The parsed content.
   */
  static readFile<T>(filePath: string, parser: ParserFunction<T>): T {
    const absolutePath = path.resolve(filePath);
    try {
      const content = fs.readFileSync(absolutePath, "utf-8");
      return parser(content);
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Failed to read or parse the file: ${error.message}`);
      } else {
        throw new Error(
          "Failed to read or parse the file due to an unknown error."
        );
      }
    }
  }

  /**
   * Default parser that splits content into lines.
   * @param content - The file content as a string.
   * @returns An array of lines.
   */
  static parseLines(content: string): string[] {
    return content.split(/\r?\n/).filter((line) => line.trim() !== "");
  }

  /**
   * Default parser that splits content into numbers.
   * @param content - The file content as a string.
   * @returns An array of numbers.
   */
  static parseNumbers(content: string): number[] {
    return content
      .split(/\r?\n/)
      .filter((line) => line.trim() !== "")
      .map((line) => parseFloat(line));
  }
}

export default FileReader;
