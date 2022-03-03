/**
 * @overview Prob_2343 test
 * @createdBy swpark (<swpark@lucentblock.com>)
 * @createdAt 2022-03-03 05:29:14
 * @updatedBy swpark (<swpark@lucentblock.com>)
 * @updatedAt 2022-03-03 17:50:05
 */

import { solve } from "./main";

it("Solve 1", () => {
  const N = 9;
  const M = 3;
  const minutes = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  expect(solve(N, M, minutes)).toBe(17);
});
