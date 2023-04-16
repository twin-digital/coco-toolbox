import { cosine } from './cosine';

describe('cosine', () => {
  it('should return the correct value for positive input', () => {
    expect(cosine(Math.PI/3)).toBeCloseTo(0.5);
  });

  it('should return the correct value for negative input', () => {
    expect(cosine(-Math.PI/4)).toBeCloseTo(0.707);
  });

  it('should return 1 when input angle is 0', () => {
    expect(cosine(0)).toBeCloseTo(1);
  });

  it('should throw an error when input angle is less than -pi', () => {
    expect(() => cosine(-Math.PI - 0.1)).toThrowError('Input angle is outside the standard range: -pi to pi');
  });

  it('should throw an error when input angle is greater than pi', () => {
    expect(() => cosine(Math.PI + 0.1)).toThrowError('Input angle is outside the standard range: -pi to pi');
  });

  it('should return NaN when input is NaN', () => {
    expect(cosine(NaN)).toBeNaN();
  });

  it('should return Infinity when input is Infinity', () => {
    expect(cosine(Infinity)).toBe(Infinity);
  });
});
