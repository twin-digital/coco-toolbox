export function removeLeadingSlash(path: string): string {
  /**
   * Given a string, remove the leading slash (if it has one).
   * @param path - The string to process.
   * @returns - The string with the leading slash removed.
   */
  function removeLeadingSlash(path: string): string {
    return path.startsWith('/') ? path.slice(1) : path;
  }
  
  return removeLeadingSlash(path);
}
