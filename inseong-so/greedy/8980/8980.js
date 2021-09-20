const solution = input => {
  const [N, W] = input[0].split(' ').map(e => +e);
  const village = input
    .slice(2)
    .map(e => e.split(' ').map(e2 => +e2))
    .sort((a, b) => a[1] - b[1] || a[0] - b[0]);

  const truck = Array(N + 1).fill(W);

  let answer = 0;
  for (let v of village) {
    let min = W;
    const [start, end, weight] = v;
    for (let i = start; i < end; i++) {
      min = min > truck[i] ? truck[i] : min;
    }
    min = min > weight ? weight : min;
    for (let i = start; i < end; i++) {
      truck[i] -= min;
    }

    answer += min;
  }

  console.log(answer);
};

/* 테스트 케이스 정의 */
describe('8980', () => {
  // 변수 입력하기
  const input =
    process.platform === 'linux'
      ? require('fs')
          .readFileSync('/dev/stdin')
          .toString()
          .trim()
          .split(require('os').EOL)
      : [
          '4 40',
          '6',
          '3 4 20',
          '1 2 10',
          '1 3 20',
          '1 4 30',
          '2 3 10',
          '2 4 20',
        ];
  // 테스트 케이스명
  it('기본1', () => {
    console.log = jest.fn();
    // 함수 실행
    solution(input);
    // 결과
    const result = 70;

    // 테스트 결과 정의
    expect(console.log).toHaveBeenCalledWith(result);
  });
  it('기본2', () => {
    console.log = jest.fn();
    // 함수 실행
    solution(['6 60', '5', '1 2 30', '2 5 70', '5 6 60', '3 4 40', '1 6 40']);
    // 결과
    const result = 150;

    // 테스트 결과 정의
    expect(console.log).toHaveBeenCalledWith(result);
  });
  it('반례1', () => {
    console.log = jest.fn();
    // 함수 실행
    solution(['5 4', '5', '2 4 1', '4 5 3', '1 5 1', '3 4 2', '1 2 2']);
    // 결과
    const result = 9;

    // 테스트 결과 정의
    expect(console.log).toHaveBeenCalledWith(result);
  });
  it('반례2', () => {
    console.log = jest.fn();
    // 함수 실행
    solution([
      '6 5',
      '6',
      '5 6 2',
      '4 5 3',
      '1 2 2',
      '3 6 2',
      '3 4 3',
      '2 6 1',
    ]);
    // 결과
    const result = 12;

    // 테스트 결과 정의
    expect(console.log).toHaveBeenCalledWith(result);
  });
  it('반례3', () => {
    console.log = jest.fn();
    // 함수 실행
    solution(['4 5', '4', '3 4 1', '2 3 4', '1 2 1', '1 4 4']);
    // 결과
    const result = 7;

    // 테스트 결과 정의
    expect(console.log).toHaveBeenCalledWith(result);
  });
  it('반례4', () => {
    console.log = jest.fn();
    // 함수 실행
    solution([
      '6 4',
      '10',
      '2 6 2',
      '4 6 1',
      '1 5 2',
      '3 4 2',
      '5 6 1',
      '3 6 1',
      '2 3 2',
      '1 2 4',
      '4 5 2',
      '1 6 2',
    ]);
    // 결과
    const result = 13;

    // 테스트 결과 정의
    expect(console.log).toHaveBeenCalledWith(result);
  });
  it('반례5', () => {
    console.log = jest.fn();
    // 함수 실행
    solution([
      '6 3',
      '8',
      '2 6 3',
      '5 6 1',
      '4 5 3',
      '4 6 2',
      '1 2 1',
      '1 4 1',
      '2 3 2',
      '3 5 2',
    ]);
    // 결과
    const result = 8;

    // 테스트 결과 정의
    expect(console.log).toHaveBeenCalledWith(result);
  });
});
