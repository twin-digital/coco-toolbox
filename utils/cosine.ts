import { math } from 'typescript';

/**
 * Calculates the cosine of an angle in radians.
 * @param angleInRadians The angle in radians.
 * @returns The cosine of the input angle.
 * @throws An error if the input value is outside the standard range of -pi to pi.
 */
export function cosine(angleInRadians: number): number {
  if (angleInRadians < -Math.PI || angleInRadians > Math.PI) {
    throw new Error('Input value is outside the standard range of -pi to pi.');
  }

  const cosineValue: number = Math.cos(angleInRadians);

  return parseFloat(cosineValue.toFixed(3));
}