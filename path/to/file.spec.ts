import { removeLeadingSlash } from './file';

describe('removeLeadingSlash', () => {
  it('should remove the leading slash from a string with one', () => {
    expect(removeLeadingSlash('/test/path')).toEqual('test/path');
  });

  it('should not modify a string without a leading slash', () => {
    expect(removeLeadingSlash('test/path')).toEqual('test/path');
  });
});
