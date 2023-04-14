import { removeLeadingSlash } from './path-utils';

describe('removeLeadingSlash', () => {
  it('removes leading slash from path with leading slash', () => {
    expect(removeLeadingSlash('/example/path')).toEqual('example/path');
  });

  it('does not modify path without leading slash', () => {
    expect(removeLeadingSlash('example/path')).toEqual('example/path');
  });
});
