import { cosine } from './cosine';

describe('cosine', () => {
  it('should return 1 for 0 radians', () => {
    expect(cosine(0)).toBe(1);
  });

  it('should return -1 for pi radians', () => {
    expect(cosine(Math.PI)).toBe(-1);
  });

  it('should throw an error if the angle is less than -pi', () => {
    expect(() => cosine(-Math.PI - 0.1)).toThrow('The input value must be between -pi and pi.');
  });

  it('should throw an error if the angle is greater than pi', () => {
    expect(() => cosine(Math.PI + 0.1)).toThrow('The input value must be between -pi and pi.');
  });
});
