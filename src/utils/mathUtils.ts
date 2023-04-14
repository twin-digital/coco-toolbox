import { AssertionError } from 'assert';

/**
 * Calculate the factorial of a given number
 * @param num - Input number to calculate the factorial for
 * @returns The factorial of the input number
 * @throws An error if the input number is not a positive integer
 */
function calculateFactorial(num: number): number {
  if (num < 0 || !Number.isInteger(num)) {
    throw new AssertionError({ message: 'Input must be a positive integer!' });
  }
  if (num === 0) {
    return 1;
  }
  return num * calculateFactorial(num - 1);
}

export { calculateFactorial };