/**
 * Removes leading slashes from a path string
 * @param path - the path to manipulate
 * @returns the path without leading slashes
 */
export function removeLeadingSlashes(path: string): string {
  return path.replace(/^\//, '');
}
