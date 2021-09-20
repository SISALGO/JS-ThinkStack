const solution = input => {
  const [N, M] = input[0].split(' ').map(e => +e);
  const matrix = input.slice(1).map(e => e.split(' ').map(e2 => +e2));

  const dx = [0, 0, 1, -1];
  const dy = [-1, 1, 0, 0];

  const cache = Array.from({ length: N + 1 }, () => Array(M + 1).fill(-1));
  const dfs = (x, y) => {
    if (x === N && y === M) {
      return 1;
    }

    if (cache[x][y] != -1) {
      return cache[x][y];
    }

    cache[x][y] = 0;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (
        nx > 0 &&
        nx <= N &&
        ny > 0 &&
        ny <= M &&
        matrix[nx - 1][ny - 1] < matrix[x - 1][y - 1]
      ) {
        cache[x][y] += dfs(nx, ny);
      }
    }

    return cache[x][y];
  };

  console.log(dfs(1, 1));
};

/* 테스트 케이스 정의 */
describe('1520', () => {
  // 변수 입력하기
  const input =
    process.platform === 'linux'
      ? require('fs')
          .readFileSync('/dev/stdin')
          .toString()
          .trim()
          .split(require('os').EOL)
      : [
          '4 5',
          '50 45 37 32 30',
          '35 50 40 20 25',
          '30 30 25 17 28',
          '27 24 22 15 10',
        ];
  // 테스트 케이스명
  it('기본1', () => {
    console.log = jest.fn();
    // 함수 실행
    solution(input);
    // 결과
    const result = 3;

    // 테스트 결과 정의
    expect(console.log).toHaveBeenCalledWith(result);
  });
});
