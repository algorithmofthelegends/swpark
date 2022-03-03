/**
 * @overview {{ TODO. Add description, and remove braket }}
 * @createdBy swpark (<swpark@lucentblock.com>)
 * @createdAt 2022-02-17 13:29:29
 * @updatedBy swpark (<swpark@lucentblock.com>)
 * @updatedAt 2022-02-17 19:55:23
 */

import { valueToNode } from "@babel/types";

interface Input {
  N: number;
  A: number[];
  B: number[];
}

function solve(input: Input) {
  const { N, A, B } = input;

  B.map((b, index) => ({ value: b, index })); // [{value: 2, index: 0}, {value: 7, index: 1}, {value: 8, index: 2}, {value: 3, index: 3}, {value: 1, index: 4}]
  // [{value: 1, index: 4}, {value: 2, index: 0}, {value: 7, index: 1}, {value: 8, index: 2}, {value: 3, index: 3}, ]...

  const maxBs = [];
  for (let i = 0; i < N; i++) {
    const bMax = Math.max(...B);
    maxBs.push(bMax);
    const index = B.findIndex(b =>  b === bMAx);
    B.slice(0, N - i);
  }
}
// N * N
// [2,  7,  8,  3,  1], // 2   7    2
// [2,  7,  8,  3,  1], // 7   2    7
// [2,  7,  8,  3,  1], // 8   8    3
// [12, 42, 48, 18, 6], // 18  18   6
// [0,  0,  0,  0,  0]  // 0   0    0
// -----------------------------
//                         35  35 . 18
const input1 = {
  N: 5,
  A: [1, 1, 1, 6, 0], // 0
  B: [2, 7, 8, 3, 1] // 8
};
solve(input1); // 18

const input2 = {
  N: 3,
  A: [1, 1, 3],
  B: [10, 30, 20]
};
solve(input2); // 80

const input3 = {
  N: 9,
  A: [5, 15, 100, 31, 39, 0, 0, 3, 26],
  B: [11, 12, 13, 2, 3, 4, 5, 9, 1]
};

solve(input3); // 528
