/**
 * Removes leading slash from a path string.
 * @param path - The path string to modify.
 * @returns The path string without a leading slash.
 */
export function removeLeadingSlash(path: string): string {
  return path.startsWith('/') ? path.slice(1) : path;
}
