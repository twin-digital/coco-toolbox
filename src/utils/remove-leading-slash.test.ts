import { expect } from 'chai';
import { removeLeadingSlash } from './remove-leading-slash';

describe('Removing leading slashes from a path', () => {
  it('should remove leading slashes from paths that start with one', () => {
    expect(removeLeadingSlash('/path/with/leading/slash')).to.equal('path/with/leading/slash');
  });

  it('should not modify a path with no leading slash', () => {
    expect(removeLeadingSlash('path/with/no/leading/slash')).to.equal('path/with/no/leading/slash');
  });
});