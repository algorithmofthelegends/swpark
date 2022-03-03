/**
 * @overview https://www.acmicpc.net/problem/21967
 * @createdBy swpark (<swpark@lucentblock.com>)
 * @createdAt 2022-01-22 21:34:01
 * @updatedBy swpark (<swpark@lucentblock.com>)
 * @updatedAt 2022-01-27 01:57:31
 */

export function solve(n: number, values: number[]) {
  const counter = new Array(10).fill(0);

  // 왼쪽인덱스
  let left = 0;
  // 오른쪽인덱스
  let right = 0;

  for (; right < n; right++) {
    counter[values[right] - 1] += 1;

    const { maxIndex, minIndex } = counter.reduce(
      (acc, count, index) => {
        if (count === 0) {
          return acc;
        }

        // MAX
        if (acc.maxIndex < index) {
          acc.maxIndex = index;
        }

        // MIN
        if (index < acc.minIndex) {
          acc.minIndex = index;
        }

        return acc;
      },
      { maxIndex: -1, minIndex: 11 }
    );

    // 불만족
    if (2 < maxIndex - minIndex) {
      counter[values[left] - 1] -= 1;
      left++;
    }
  }

  const length = right - left;

  return length;
}
