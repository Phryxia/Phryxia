/**
 * Extract n samples from list without replacement in O(|list|)
 * @param {Object[]} list - array containing elements
 * @param {number} n - size of the extraction
 * @returns {Object[]} new array contains extracted elements
 */
export function getSamplesWithoutReplacement<T>(list: T[], n: number): T[] {
  if (n <= 0) return []

  list = [...list]
  if (n >= list.length) return list

  for (let k = 0; k < n; ++k) {
    const target = Math.floor(Math.random() * (list.length - k)) + k
    ;[list[k], list[target]] = [list[target], list[k]]
  }
  list.length = n
  return list
}
