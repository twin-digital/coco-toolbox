/*
* Calculates and returns the cosine of the given angle in radians
* @param angleInRadians The angle in radians to calculate cosine for
* @returns The cosine value of the input angle
* @throws An error if the input value is outside the standard range of -pi to pi
*/
export function cosine(angleInRadians: number): number {
  if (angleInRadians < -Math.PI || angleInRadians > Math.PI) {
    throw new Error('Angle value is out of range. Must be between -pi and pi.');
  }

  return Number(Math.cos(angleInRadians).toFixed(3));
}
