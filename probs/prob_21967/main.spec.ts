/**
 * @overview Prob 21967 tests
 * @createdBy swpark (<swpark@lucentblock.com>)
 * @createdAt 2022-01-22 21:39:44
 * @updatedBy swpark (<swpark@lucentblock.com>)
 * @updatedAt 2022-01-26 21:10:13
 */

import { solve } from "./main";

describe("Prob 21967", () => {
  it("Example 1", () => {
    const n = 5;
    const values = [1, 2, 1, 3, 1];

    // Run test
    const answer = solve(n, values);

    expect(answer).toBe(5);
  });

  it("Example 2", () => {
    const n = 7;
    const values = [1, 2, 3, 4, 2, 5, 7];

    // Run test
    const answer = solve(n, values);

    expect(answer).toBe(4);
  });

  it("Example 3", () => {
    const n = 1;
    const values = [1];

    // Run test
    const answer = solve(n, values);

    expect(answer).toBe(1);
  });

  it("Example 4", () => {
    const n = 5;
    const values = [5, 6, 1, 2, 9];

    // Run test
    const answer = solve(n, values);

    expect(answer).toBe(2);
  });

  it("Example 5", () => {
    const n = 15;
    const values = [1, 5, 3, 6, 7, 6, 6, 5, 8, 9, 10, 9, 10, 8, 8];

    // Run test
    const answer = solve(n, values);

    expect(answer).toBe(7);
  });

  it("Example 6", () => {
    const n = 10;
    const values = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

    // Run test
    const answer = solve(n, values);

    expect(answer).toBe(3);
  });

  it("Example 6", () => {
    const n = 7;
    const values = [1, 2, 3, 4, 3, 2, 1];

    // Run test
    const answer = solve(n, values);

    expect(answer).toBe(5);
  });

  it("Example 7", () => {
    const n = 9;
    const values = [1, 5, 1, 5, 1, 5, 1, 5, 6];

    // Run test
    const answer = solve(n, values);

    expect(answer).toBe(2);
  });

  it("Example 8", () => {
    const n = 1000000;
    const values = [];
    for (let i = 0; i < n / 2; i++) {
      values.push(1);
      values.push(6);
    }

    // Run test
    const answer = solve(1000000, values);

    expect(answer).toBe(1);
  });

  it("Example 9", () => {
    const n = 1000000;
    const values = [];
    for (let i = 0; i < n / 2; i++) {
      values.push(1);
    }

    for (let i = n / 2 + 1; i < n; i++) {
      values.push(5);
    }

    // Run test
    const answer = solve(1000000, values);

    expect(answer).toBe(500000);
  });
});
