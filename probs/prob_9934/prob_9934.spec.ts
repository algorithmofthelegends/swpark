/**
 * @overview {{ TODO. Add description, and remove braket }}
 * @createdBy swpark (<swpark@lucentblock.com>)
 * @createdAt 2022-02-10 01:52:00
 * @updatedBy swpark (<swpark@lucentblock.com>)
 * @updatedAt 2022-02-10 02:19:23
 */

import { solve } from "./prob_9934";

describe("Prob 9934", () => {
  it("Exam1", () => {
    expect(solve(2, [2, 1, 3])).toEqual([[1], [2, 3]]);
  });

  it("Exam2", () => {
    expect(solve(3, [1, 6, 4, 3, 5, 2, 7])).toEqual([
      [3],
      [6, 2],
      [1, 4, 5, 7]
    ]);
  });
});
