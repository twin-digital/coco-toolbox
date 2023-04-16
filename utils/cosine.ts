/*
 * Calculates the cosine of a given angle in radians
 * @param angleInRadians The angle in radians
 * @throws Error if input angle is outside the standard range: -pi to pi
 * @returns The cosine value of the input angle with precision up to 3 decimals
 */
export function cosine(angleInRadians: number): number {
  if (angleInRadians < -Math.PI || angleInRadians > Math.PI) {
    throw new Error('Input angle is outside the standard range: -pi to pi');
  }
  return parseFloat(Math.cos(angleInRadians).toFixed(3));
}
