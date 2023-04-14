export function removeLeadingSlash(path: string): string {
  if (path.startsWith('/')) {
    return path.slice(1)
  }
  return path
}
