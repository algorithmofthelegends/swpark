/**
 * @overview https://www.acmicpc.net/problem/21967
 * @createdBy swpark (<swpark@lucentblock.com>)
 * @createdAt 2022-01-22 21:34:01
 * @updatedBy swpark (<swpark@lucentblock.com>)
 * @updatedAt 2022-01-25 02:32:51
 */

export function solve(n: number, ...values: number[]) {
  const MAX_VALUE = 11;
  const MIN_VALUE = 0;

  // 왼쪽인덱스
  let left = 0;
  // 오른쪽인덱스
  let right = 1;

  // 접근 인덱스, 최대, 최소
  for (let max = values[0], min = values[0]; right < n; ) {
    console.debug("left", left, "right", right);

    // 인덱스 내 반석 검사
    for (let j = left; j < right + 1; j++) {
      max = Math.max(values[j], max);
      min = Math.min(values[j], min);
    }

    console.debug("max", max, "min", min);

    const isRock = max - min <= 2;

    if (isRock) {
      // 오른쪽 증가
      right++;
    } else {
      // 윈도우 이동
      left++;
      right++;
      max = MIN_VALUE;
      min = MAX_VALUE;
    }
  }

  const length = right - left;

  return length;
}
