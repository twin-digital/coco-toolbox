export function removeLeadingSlash(path: string): string {
  /**
   * Removes the leading slash from a path string if it has one
   * @param path - the input path string
   * @returns the path string without the leading slash
   */
  return path.startsWith('/') ? path.slice(1) : path;
}
