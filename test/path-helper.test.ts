import { removeLeadingSlash } from '../src/path-helper';

describe('removeLeadingSlash', () => {
  it('should remove leading slash from path', () => {
    const path = '/test/path';
    const expected = 'test/path';
    const result = removeLeadingSlash(path);
    expect(result).toEqual(expected);
  });

  it('should not remove leading slash if not present', () => {
    const path = 'test/path';
    const expected = 'test/path';
    const result = removeLeadingSlash(path);
    expect(result).toEqual(expected);
  });
});