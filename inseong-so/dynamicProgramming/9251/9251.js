const solution = (target, compare) => {
  const N = target.length,
    M = compare.length;

  target.unshift('|');
  compare.unshift('|');

  const LCS = Array.from({ length: N + 1 }, () =>
    Array.from({ length: M + 1 }, () => 0),
  );

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      if (target[i - 1] === compare[j - 1]) {
        LCS[i][j] = LCS[i - 1][j - 1] + 1;
      } else {
        LCS[i][j] = Math.max(LCS[i - 1][j], LCS[i][j - 1]);
      }
    }
  }

  console.log(Math.max(...LCS[N]));
};

/* 테스트 케이스 정의 */
describe('9251', () => {
  // 테스트 케이스명
  it('기본1', () => {
    console.log = jest.fn();
    // 변수 입력하기
    const [target, compare] = ['ACAYKP', 'CAPCAK'];
    // 함수 실행
    solution(target, compare);
    // 결과
    const result = 4;

    // 테스트 결과 정의
    expect(console.log).toHaveBeenCalledWith(result);
  });
  it('기본2', () => {
    console.log = jest.fn();
    // 변수 입력하기
    const [target, compare] = [
      'LongestCommonSubstring',
      'LongestCommonSubsequence',
    ];
    // 함수 실행
    solution(target, compare);
    // 결과
    const result = 19;

    // 테스트 결과 정의
    expect(console.log).toHaveBeenCalledWith(result);
  });
});
