/**
 * Calculates the cosine of the given angle in radians.
 * @param angleInRadians The angle in radians.
 * @returns The cosine value of the angle.
 * @throws An error if the input value is outside the standard range of -pi to pi
 */
export function cosine(angleInRadians: number): number {
  if (angleInRadians < -Math.PI || angleInRadians > Math.PI) {
    throw new Error('The input value must be between -pi and pi.');
  }

  return Number(Math.cos(angleInRadians).toFixed(3));
}