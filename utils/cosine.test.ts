import { cosine } from './cosine';

describe('cosine', () => {
  test('should calculate cosine for a given angle', () => {
    expect(cosine(0)).toBe(1);
    expect(cosine(Math.PI)).toBe(-1);
    expect(cosine(Math.PI / 4)).toBeCloseTo(0.707);
    expect(cosine(-Math.PI / 3)).toBeCloseTo(0.5);
  });

  test('should throw error if input angle is out of range', () => {
    expect(() => cosine(Math.PI * 2)).toThrowError('Angle value is out of range. Must be between -pi and pi.');
    expect(() => cosine(-Math.PI * 2)).toThrowError('Angle value is out of range. Must be between -pi and pi.');
  });

  test('should handle edge cases', () => {
    expect(cosine(NaN)).toBeNaN();
    expect(cosine(Infinity)).toBeNaN();
    expect(cosine(-Infinity)).toBeNaN();
  });
});
