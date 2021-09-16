const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(require('os').EOL);
/*
1. X의 주 대각선을 ((1,1), (2,2), …, (n, n)) 가운데 열 ((n+1)/2 번째 열)로 옮긴다.
2. X의 부 대각선을 X의 가운데 행 ((n+1)/2번째 행)으로 옮긴다.
3. X의 가운데 열을 X의 부 대각선으로 ((n, 1), (n-1, 2), …, (1, n)) 옮긴다. 
4. X의 가운데 행을 X의 주 대각선으로 옮긴다.
5. 위 네 가지 경우 모두 원소의 기존 순서는 유지 되어야 한다.
6. X의 다른 원소의 위치는 변하지 않는다.
*/

const solution = (N, rotate, matrix) => {
  if (rotate < 0) rotate += 360;
  let loop = Math.floor(rotate / 45);
  while (loop > 0) {
    const cache = Array.from({ length: N }, () => Array(N).fill(0));
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        // 1번
        if (i === j) {
          cache[i][Math.round(N / 2) - 1] = matrix[i][j];
        }
        // 2번
        if (i + j === N - 1) {
          cache[Math.round(N / 2) - 1][j] = matrix[i][j];
        }
        // 3번
        if (j === Math.round(N / 2) - 1) {
          cache[i][N - i - 1] = matrix[i][j];
        }
        // 4번
        if (i === Math.round(N / 2) - 1) {
          cache[j][j] = matrix[i][j];
        }
        // 6번(5번은 해당 없음)
        if (cache[i][j] === 0) {
          cache[i][j] = matrix[i][j];
        }
      }
    }
    matrix = cache;
    loop--;
  }
  console.log(matrix.map(e => e.join(' ')).join('\n'));
};

for (let i = 1; i < input.length - 1; ) {
  const [N, rotate] = input[i].split(' ').map(e => +e);
  const matrix = input
    .slice(i + 1, N + i + 1)
    .map(e => e.split(' ').map(e2 => +e2));
  solution(N, rotate, matrix);
  i += N + 1;
}

/* 테스트 케이스 정의 */
/**
 * jest의 jest.fn()과 mock()에 대해 이해를 못하고 있으므로 해당 테스트케이스 임시 폐쇄
 *
 */
// describe('17276', () => {
//   const input = require('fs')
//     .readFileSync('inseong-so/implementation/17276/stdin')
//     .toString()
//     .trim()
//     .split(require('os').EOL);

//   // 테스트 케이스명
//   it('기본1', () => {
//     console.log = jest.fn();
//     for (let i = 1; i < input.length - 1; ) {
//       const [N, rotate] = input[i].split(' ').map(e => +e);
//       const matrix = input
//         .slice(i + 1, N + i + 1)
//         .map(e => e.split(' ').map(e2 => +e2));
//       solution(N, rotate, matrix);
//       i += N + 1;
//     }
//     // 결과
//     const result =
//       '11 2 1 4 3\n' +
//       '6 12 7 8 10\n' +
//       '21 17 13 9 5\n' +
//       '16 18 19 14 20\n' +
//       '23 22 25 24 15\n' +
//       '3 2 5 4 15\n' +
//       '6 8 9 14 10\n' +
//       '1 7 13 19 25\n' +
//       '16 12 17 18 20\n' +
//       '11 22 21 24 23\n' +
//       '23 2 21 4 11\n' +
//       '6 18 17 12 10\n' +
//       '25 19 13 7 1\n' +
//       '16 14 9 8 20\n' +
//       '15 22 5 24 3\n' +
//       '1 2 3 4 5\n' +
//       '6 7 8 9 10\n' +
//       '11 12 13 14 15\n' +
//       '16 17 18 19 20\n' +
//       '21 22 23 24 25';
//     // 테스트 결과 정의
//     expect(console.log).toHaveBeenCalledWith(result);
//   });
// });
