// const input = require('fs')
//   .readFileSync('stdin')
//   .toString()
//   .trim()
//   .split(require('os').EOL);

// 2차 풀이 도전... 성공!
const solution = input => {
  const dx = [0, 0, 1, -1];
  const dy = [-1, 1, 0, 0];

  // 1. 비어있는 칸 중에서 좋아하는 학생이 인접한 칸에 가장 많은 칸으로 자리를 정한다.
  // 2. 1을 만족하는 칸이 여러 개이면, 인접한 칸 중에서 비어있는 칸이 가장 많은 칸으로 자리를 정한다.
  // 3. 2를 만족하는 칸도 여러 개인 경우에는 행의 번호가 가장 작은 칸으로, 그러한 칸도 여러 개이면 열의 번호가 가장 작은 칸으로 자리를 정한다.

  const N = +input[0];
  const students = input.slice(1).map(e => e.split(' ').map(e2 => +e2));
  const studentMap = new Map();
  students.forEach(e => {
    studentMap.set(e[0], e.slice(1));
  });
  const classroom = Array.from({ length: N }, () => Array(N).fill(0));

  // 타겟 학생별로 좌표 DFS
  const dfs = (student, N) => {
    let maxLiked = -1;
    let maxEmpty = -1;
    let lx = -1;
    let ly = -1;

    // 3번 조건을 충족시키기 위한 역루프
    for (let i = N - 1; i >= 0; --i) {
      for (let j = N - 1; j >= 0; --j) {
        let emptyCnt = 0;
        let likedCnt = 0;
        if (classroom[i][j] === 0) {
          // 상하좌우 탐색, 해당 교실의 비어있는 좌석을 기준으로 총 9번 돌게 된다.
          for (let index = 0; index < 4; index++) {
            const nx = i + dx[index];
            const ny = j + dy[index];
            if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
              // 인접한 공간이 비어있으므로 빈 공간 + 1
              if (classroom[nx][ny] === 0) {
                emptyCnt++;
              }
              // 인접한 공간에 좋아하는 학생이 있다면 좋아하는 수 + 1
              if (studentMap.get(student).indexOf(classroom[nx][ny]) !== -1) {
                likedCnt++;
              }
            }
          }

          // 좋아하는 사람이 인접한 수가 현재 루프보다 작다면 이 좌표는 무효다.
          if (maxLiked > likedCnt) {
            continue;
          } else {
            // 좋아하는 사람이 인접한 수와 현재 루프의 그 수가 같다면 1번을 충족한다.
            if (maxLiked === likedCnt) {
              // 인접한 빈 칸이 현재 루프의 그 수보다 작거나 같다면 2번을 충족한다.
              if (maxEmpty <= emptyCnt) {
                lx = i;
                ly = j;
                maxLiked = likedCnt;
                maxEmpty = emptyCnt;
              }
              // 아니라면 해당 좌표에 앉힌다.
            } else {
              lx = i;
              ly = j;
              maxLiked = likedCnt;
              maxEmpty = emptyCnt;
            }
          }
        }
      }
    }

    return [lx, ly];
  };

  // 만족도 구하기
  const getSatisfaction = () => {
    let satisfaction = 0;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        let likedCnt = 0;
        for (let index = 0; index < 4; index++) {
          const nx = i + dx[index];
          const ny = j + dy[index];
          if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
            // 인접한 공간에 좋아하는 학생이 있다면 좋아하는 수 + 1
            if (
              studentMap.get(classroom[i][j]).indexOf(classroom[nx][ny]) !== -1
            ) {
              likedCnt++;
            }
          }
        }
        switch (likedCnt) {
          case 1:
            satisfaction += 1;
            break;
          case 2:
            satisfaction += 10;
            break;
          case 3:
            satisfaction += 100;
            break;
          case 4:
            satisfaction += 1000;
            break;
        }
      }
    }

    return satisfaction;
  };

  for (let student of students) {
    const [x, y] = dfs(student[0], N);
    classroom[x][y] = student[0];
  }

  console.log(getSatisfaction());
};

/* 테스트 케이스 정의 */
describe('21608', () => {
  // 테스트 케이스명
  it('기본1', () => {
    console.log = jest.fn();
    // 변수 입력하기
    const input = [
      '3',
      '4 2 5 1 7',
      '3 1 9 4 5',
      '9 8 1 2 3',
      '8 1 9 3 4',
      '7 2 3 4 8',
      '1 9 2 5 7',
      '6 5 2 3 4',
      '5 1 9 2 8',
      '2 9 3 1 4',
    ];
    // 함수 실행
    solution(input);
    // 결과
    const result = 54;

    // 테스트 결과 정의
    expect(console.log).toHaveBeenCalledWith(result);
  });
  it('기본`2', () => {
    console.log = jest.fn();
    // 변수 입력하기
    const input = [
      '3',
      '4 2 5 1 7',
      '2 1 9 4 5',
      '5 8 1 4 3',
      '1 2 9 3 4',
      '7 2 3 4 8',
      '9 8 4 5 7',
      '6 5 2 3 4',
      '8 4 9 2 1',
      '3 9 2 1 4',
    ];
    // 함수 실행
    solution(input);
    // 결과
    const result = 1053;

    // 테스트 결과 정의
    expect(console.log).toHaveBeenCalledWith(result);
  });
  it('반례 1', () => {
    console.log = jest.fn();
    // 변수 입력하기
    const input = [
      '3',
      '1 1 1 1 1',
      '2 1 1 1 1',
      '3 1 1 1 1',
      '4 1 1 1 1',
      '5 1 1 1 1',
      '6 1 1 1 1',
      '7 1 1 1 1',
      '8 1 1 1 1',
      '9 1 1 1 1',
    ];
    // 함수 실행
    solution(input);
    // 결과
    const result = 4;

    // 테스트 결과 정의
    expect(console.log).toHaveBeenCalledWith(result);
  });
  it('반례 2', () => {
    console.log = jest.fn();
    // 변수 입력하기
    const input = [
      '3',
      '7 9 3 8 2 ',
      '5 7 3 8 6',
      '3 5 2 4 9',
      '9 6 8 3 4',
      '8 5 3 1 6',
      '6 3 8 5 4',
      '2 6 4 8 7',
      '1 8 3 4 5',
      '4 7 9 3 8',
    ];
    // 함수 실행
    solution(input);
    // 결과
    const result = 151;

    // 테스트 결과 정의
    expect(console.log).toHaveBeenCalledWith(result);
  });
});

// 1차 풀이 도전... 실패! 접근은 좋았는데 아직 구현 조건을 명확히 이해 못한 것 같다.
// const complete = new Map();
// for (let student of students) {
//   // 아무 자리도 비어있지 않다면
//   if (emptyDesk === N ** 2) {
//     const middle = Math.floor(N / 2);
//     classroom[middle][middle] = student[0];
//     complete.set(student[0], [middle, middle]);
//   } else {
//     let sit = Array.from(complete.keys());
//     // 후보군 선별
//     let maxLiked = 0;
//     let maxEmpty = 0;
//     let x = 0;
//     let y = 0;
//     for (let i = 1; i < student.length; i++) {
//       if (sit.indexOf(student[i]) !== -1) {
//         let [lx, ly] = complete.get(student[i]);
//         let curLiked = 0;
//         let curEmpty = 0;
//         for (let j = 0; j < 4; j++) {
//           const nx = lx + dx[j];
//           const ny = ly + dy[j];
//           if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
//             if (classroom[nx][ny] === 0) {
//               curEmpty++;
//             } else if (classroom[nx][ny] === student[i]) {
//               curLiked++;
//             }
//           }
//         }
//         if (maxLiked <= curLiked) {
//           if (maxLiked === curLiked) {
//             if (maxEmpty <= curEmpty) {
//               x = lx;
//               y = ly;
//               maxLiked = curLiked;
//               maxEmpty = curEmpty;
//             }
//           } else {
//             x = lx;
//             y = ly;
//             maxLiked = curLiked;
//             maxEmpty = curEmpty;
//           }
//         }
//       }
//     }
//     console.log(x, y, maxLiked, maxEmpty);
//   }

//   --emptyDesk;
// }

// console.log(classroom);
