import { removeLeadingSlash } from './remove-leading-slash';

describe('removeLeadingSlash', () => {
  test('removes leading slash from path', () => {
    expect(removeLeadingSlash('/path')).toBe('path');
  });
  test('returns original path if it does not start with slash', () => {
    expect(removeLeadingSlash('path')).toBe('path');
  });
});
