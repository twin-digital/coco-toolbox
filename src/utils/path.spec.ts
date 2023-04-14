import { removeLeadingSlashes } from './path';

describe('removeLeadingSlashes', () => {
  it('should remove leading slashes from a path', () => {
    expect(removeLeadingSlashes('/test')).toEqual('test');
    expect(removeLeadingSlashes('//test')).toEqual('test');
    expect(removeLeadingSlashes('test')).toEqual('test');
  });
});
