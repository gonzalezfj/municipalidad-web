/**
 * Range function
 *
 * @param {number} n - Number of elements in the array
 * @returns {Array<number>} - Array of numbers from 0 to n-1
 */
export default function range (n) {
  return [...Array(n).fill(0).keys()]
}
