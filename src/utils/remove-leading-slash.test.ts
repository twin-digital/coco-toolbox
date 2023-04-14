import { removeLeadingSlash } from './remove-leading-slash';

test('removeLeadingSlash() removes leading slash from path', () => {
  expect(removeLeadingSlash('/test')).toBe('test');
});

test('removeLeadingSlash() does nothing if path has no leading slash', () => {
  expect(removeLeadingSlash('test')).toBe('test');
});