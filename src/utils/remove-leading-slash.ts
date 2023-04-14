export const removeLeadingSlash = (path: string): string => {
  return path.startsWith('/') ? path.slice(1) : path;
};