import { removeLeadingSlash } from '../remove-leading-slash';

describe('removeLeadingSlash', () => {
  it('should remove leading slash from path', () => {
    expect(removeLeadingSlash('/path')).toBe('path');
  });

  it('should not remove anything if there is no leading slash', () => {
    expect(removeLeadingSlash('path')).toBe('path');
  });
});