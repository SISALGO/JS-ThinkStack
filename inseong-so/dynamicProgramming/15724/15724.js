const solution = (N, M, matrix, territoryRange) => {
  const cacheInit = (N, M, matrix) => {
    const dp = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));
    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= M; j++) {
        dp[i][j] += dp[i - 1][j] + matrix[i - 1][j - 1];
      }
    }
    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= M; j++) {
        dp[i][j] += dp[i][j - 1];
      }
    }
    return dp;
  };

  const cache = cacheInit(N, M, matrix);
  let str = '';
  for (let [startX, startY, endX, endY] of territoryRange) {
    const dup = cache[startX - 1][startY - 1];
    const xSum = cache[startX - 1][endY] - dup;
    const ySum = cache[endX][startY - 1] - dup;
    const prefixSum = cache[endX][endY] - dup - xSum - ySum;
    str += prefixSum + '\n';
  }
  console.log(str);
};

/* 테스트 케이스 정의 */
describe('15724', () => {
  const input = require('fs')
    .readFileSync('inseong-so/dynamicProgramming/15724/stdin')
    .toString()
    .trim()
    .split(require('os').EOL);

  // 테스트 케이스명
  it('기본1', () => {
    console.log = jest.fn();
    const [N, M] = input[0].split(' ').map(e => +e);
    const matrix = input.slice(1, N + 1).map(e => e.split(' ').map(e2 => +e2));
    const territoryRange = input
      .slice(N + 2, input.length)
      .map(e => e.split(' ').map(e2 => +e2));
    // 함수 실행
    solution(N, M, matrix, territoryRange);
    // 결과
    const result =
      '102\n' +
      '59\n' +
      '293\n' +
      '90\n' +
      '109\n' +
      '177\n' +
      '182\n' +
      '23\n';

    // 테스트 결과 정의
    expect(console.log).toHaveBeenCalledWith(result);
  });
});
