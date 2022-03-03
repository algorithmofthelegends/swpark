/**
 * @overview {{ TODO. Add description, and remove braket }}
 * @createdBy swpark (<swpark@lucentblock.com>)
 * @createdAt 2022-01-25 02:34:50
 * @updatedBy swpark (<swpark@lucentblock.com>)
 * @updatedAt 2022-01-27 01:57:24
 */

function solve(n, values) {
  values = values.map((v) => parseInt(v));
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

const fs = require("fs");
const [n, ...values] = fs
  .readFileSync("input.txt") // Change to /dev/stdin
  .toString()
  .trim()
  .split(/\s+/);
console.log(solve(n, values));
