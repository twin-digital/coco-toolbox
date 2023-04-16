import { cosine } from './cosine';

/**
 * Tests for the cosine function.
 */
describe('cosine', () => {
  it('should return the correct cosine value for valid input angles', () => {
    expect(cosine(0)).toEqual(1);
    expect(cosine(Math.PI)).toEqual(-1);
    expect(cosine(Math.PI / 2)).toEqual(0);
  });

  it('should throw an error for input values outside the standard range of -pi to pi', () => {
    expect(() => cosine(Math.PI * 3 / 2)).toThrowError('Input value is outside the standard range of -pi to pi.');
    expect(() => cosine(-Math.PI * 3 / 2)).toThrowError('Input value is outside the standard range of -pi to pi.');
  });

  it('should return NaN for NaN input values', () => {
    expect(cosine(NaN)).toBeNaN();
  });

  it('should return infinity or -infinity for infinity or -infinity input values', () => {
    expect(cosine(Infinity)).toEqual(NaN);
    expect(cosine(-Infinity)).toEqual(NaN);
  });
});
