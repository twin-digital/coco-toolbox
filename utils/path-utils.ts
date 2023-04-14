export function removeLeadingSlash(path: string): string {
  /**
   * Removes leading '/' from path if it exists
   * @param path - The path string to remove the slash from
   * @returns The path string without leading slash
   */
  return path.startsWith('/') ? path.substr(1) : path;
}