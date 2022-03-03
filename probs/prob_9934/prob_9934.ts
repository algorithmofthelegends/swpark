/**
 * @overview prob_9945
 * @createdBy swpark (<swpark@lucentblock.com>)
 * @createdAt 2022-02-10 02:10:25
 * @updatedBy swpark (<swpark@lucentblock.com>)
 * @updatedAt 2022-02-10 15:33:41
 */

export function solve(k: number, seq: number[]) {
  // DFS - 전위탐색 의 역함수
  // 완전 이진트리 구성
  // [2, 1, 3]
  // [2], [1, 3]
  // 1
  // [2] [3]
  // 2 3

  // [1, 6, 4, 3, 5, 2, 7] k=1

  // [1, 6, 4] [3] [5, 2, 7] k=2
  // 3
  // [1, 6, 4] [5, 2, 7] k=2
  // [1] [6, 4]
  // 6
  // [1], [4] k=3
  // [5], [2, 7]
  // ..2
  //[5], [7] k=3
  // 1 4 5 7

  for (let i = 0; i < k; i++) {
    for (let count = 0; count < i; count++) {
      const left = seq.slice(0, seq.length / 2);
      const center = seq.slice(seq.length / 2 - 1, seq.length / 2);
      const right = seq.slice(seq.length / 2 - 1, seq.length);
      console.log(center);
    }
  }
}
