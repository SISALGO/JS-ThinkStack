const turnBelt = (conveyor, capacity) => {
  let durability = conveyor[capacity - 1][0];
  let countCheck = conveyor[capacity - 1][1];
  for (let i = capacity - 1; i > 0; i--) {
    conveyor[i][0] = conveyor[i - 1][0];
    conveyor[i][1] = conveyor[i - 1][1];
  }
  conveyor[0][0] = durability;
  conveyor[0][1] = countCheck;
};

const moveRobot = (robot, N) => {
  for (let i = N - 1; i > 0; i--) {
    robot[i] = robot[i - 1];
  }
  robot[0] = false;
};

const solution = input => {
  const [N, K] = input[0].split(' ').map(e => +e);
  const conveyor = input[1].split(' ').map(e => [+e, false]);
  const capacity = N * 2;
  const robot = Array.from({ length: N }, () => false);

  let cnt = 0;
  let turns = 1;
  while (true) {
    turnBelt(conveyor, capacity);
    moveRobot(robot, N);

    for (let i = N - 1; i >= 0; i--) {
      if (robot[i]) {
        const next = i + 1;
        if (next === N) {
          robot[i] = false;
          continue;
        }

        if (next < N && !robot[next] && conveyor[next][0] > 0) {
          robot[next] = true;
          robot[i] = false;
          conveyor[next][0]--;

          if (conveyor[next][0] === 0 && !conveyor[next][1]) {
            cnt++;
            conveyor[next][1] = true;
          }
        }
      }
    }

    if (!robot[0] && conveyor[0][0] > 0) {
      conveyor[0][0]--;
      robot[0] = true;
      if (conveyor[0][0] === 0 && !conveyor[0][1]) {
        cnt++;
        conveyor[0][1] = false;
      }
    }

    if (cnt >= K) break;

    turns++;
  }

  console.log(turns);
};

/* 테스트 케이스 정의 */
describe('20055', () => {
  // 변수 입력하기
  const input =
    process.platform === 'linux'
      ? require('fs')
          .readFileSync('/dev/stdin')
          .toString()
          .trim()
          .split(require('os').EOL)
      : ['3 2', '1 2 1 2 1 2'];
  // 테스트 케이스명
  it('기본1', () => {
    console.log = jest.fn();
    // 함수 실행
    solution(input);
    // 결과
    const result = 2;

    // 테스트 결과 정의
    expect(console.log).toHaveBeenCalledWith(result);
  });
  it('기본2', () => {
    console.log = jest.fn();
    // 함수 실행
    solution(['3 6', '10 10 10 10 10 10']);
    // 결과
    const result = 31;

    // 테스트 결과 정의
    expect(console.log).toHaveBeenCalledWith(result);
  });
  it('기본3', () => {
    console.log = jest.fn();
    // 함수 실행
    solution(['4 5', '10 1 10 6 3 4 8 2']);
    // 결과
    const result = 24;

    // 테스트 결과 정의
    expect(console.log).toHaveBeenCalledWith(result);
  });
  it('기본4', () => {
    console.log = jest.fn();
    // 함수 실행
    solution(['5 8', '100 99 60 80 30 20 10 89 99 100']);
    // 결과
    const result = 472;

    // 테스트 결과 정의
    expect(console.log).toHaveBeenCalledWith(result);
  });
});
