import { removeLeadingSlash } from './remove-leading-slash';

describe('removeLeadingSlash function', () => {
  it('should remove leading slash', () => {
    expect(removeLeadingSlash('/path/to/file')).toEqual('path/to/file');
  });

  it('should not modify the path if no leading slash', () => {
    expect(removeLeadingSlash('path/to/file')).toEqual('path/to/file');
  });
});