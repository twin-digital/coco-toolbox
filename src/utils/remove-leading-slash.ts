export function removeLeadingSlash(path: string): string {
  return path.replace(/^\//, '');
}
