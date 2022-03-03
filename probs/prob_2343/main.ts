/**
 * @overview {{ TODO. Add description, and remove braket }}
 * @createdBy swpark (<swpark@lucentblock.com>)
 * @createdAt 2022-03-03 05:25:07
 * @updatedBy swpark (<swpark@lucentblock.com>)
 * @updatedAt 2022-03-03 17:32:24
 */
// 9 3
const N = 9;
const M = 3;
const minutes = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/// 17
// 9개 강의의 수
// 블루레이 3개의 블루레이에 모든 기타 강의 동영상을 녹화
// 각 블루레이는 모두 같은 크기 중 최소
export function solve(N: number, M: number, minutes: number[]) {
  const bluerays = new Array(N);
  //1
  bluerays[0] = minutes; // 2 3 4 5 6 7 8 9
  bluerays[1] = minutes[1];
  bluerays[2] = minutes[0];

  //2
  bluerays[0] = minutes[0];
  bluerays[1] = minutes[1] + minutes[2];
  bluerays[2] = minutes
    .slice(3, minutes.length - 2)
    .reduce((total, cur) => (total += cur), 0);

  // 3
  bluerays[0] = minutes[0];
  bluerays[1] = minutes[1] + minutes[2] + minutes[3];
  bluerays[2] = minutes
    .slice(4, minutes.length - 2)
    .reduce((total, cur) => (total += cur), 0);

  // 4
  bluerays[0] = minutes[0];
  bluerays[1] = minutes[1] + minutes[2] + +minutes[3] + minutes[4];
  bluerays[2] = minutes
    .slice(5, minutes.length - 2)
    .reduce((total, cur) => (total += cur), 0);

  // 5
  bluerays[0] = minutes[0];
  bluerays[1] = minutes[1] + minutes[2] + +minutes[4] + minutes[4] + minutes[5];
  bluerays[2] = minutes
    .slice(6, minutes.length - 2)
    .reduce((total, cur) => (total += cur), 0);

  // 6
  bluerays[0] = minutes[0];
  bluerays[1] =
    minutes[1] +
    minutes[2] +
    +minutes[2] +
    minutes[4] +
    minutes[5] +
    minutes[6];
  bluerays[2] = minutes
    .slice(7, minutes.length - 2)
    .reduce((total, cur) => (total += cur), 0);

  // 7
  bluerays[0] = minutes[0] + minutes[1];
  bluerays[1] = minutes[2] + +minutes[4] + minutes[4] + minutes[5] + minutes[6];
  bluerays[2] = minutes
    .slice(7, minutes.length - 2)
    .reduce((total, cur) => (total += cur), 0);

  // 8
  bluerays[0] = minutes[0] + minutes[1] + minutes[2];
  bluerays[1] = +minutes[3] + minutes[4] + minutes[5] + minutes[6];
  bluerays[2] = minutes
    .slice(7, minutes.length - 2)
    .reduce((total, cur) => (total += cur), 0);

  // 9
  bluerays[0] = minutes[0] + minutes[1] + minutes[2] + minutes[3];
  bluerays[1] = minutes[4] + minutes[5] + minutes[6];
  bluerays[2] = minutes
    .slice(7, minutes.length - 2)
    .reduce((total, cur) => (total += cur), 0);

  // 10
  bluerays[0] = minutes[0] + minutes[1] + minutes[2] + +minutes[2] + minutes[4];
  bluerays[1] = minutes[5] + minutes[6];
  bluerays[2] = minutes
    .slice(7, minutes.length - 2)
    .reduce((total, cur) => (total += cur), 0);

  if (bluerays[0] < bluerays[2] + minutes[5]) {
    return;
  }
}
