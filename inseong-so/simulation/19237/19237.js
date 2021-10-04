const input = require('fs')
  .readFileSync('stdin')
  .toString()
  .trim()
  .split(require('os').EOL);

const [N, M, K] = input[0].split(' ').map(e => +e);
const matrix = input.slice(1, N + 1).map(e => e.split(' ').map(e2 => +e2));
const sharks = input[N + 1].split(' ').map(e => +e);
const sharkPriority = new Map();
let to = N + 2;
for (let i = 0; i < 4; i++) {
  let from = to + 4;
  const directions = [];
  for (to; to < from; to++) {
    directions.push(input[to].split(' ').map(e => +e));
  }
  sharkPriority.set(i + 1, directions);
  to = from;
}

// 1 up, 2 down, 3 left, 4 right
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const LIMIT_TIME = 1000;

// 영역의 소유자, 냄새의 잔여시간을 표시할 3차원 배열
const area = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => [-1, 0]),
);

// 상어 위치를 저장하는 맵
const currentSharks = new Map();

matrix.forEach((field, row) => {
  field.forEach((cell, col) => {
    if (cell !== 0) {
      // 상어 위치를 저장하고
      currentSharks.set(cell, [row, col]);
      // 영역 표시하기
      area[row][col] = [cell, K];
    }
  });
});

const DFS = second => {
  if (second > LIMIT_TIME) {
    return -1;
  }

  for (let i = 1; i <= M; i++) {
    if (!currentSharks.get(i)) continue;
    const [lx, ly] = currentSharks.get(i);
    for (let j = 0; j < 4; j++) {
      const priorityMove = sharkPriority.get(i)[sharks[i - 1] - 1][j] - 1;
      const [nx, ny] = [lx + dx[priorityMove], ly + dy[priorityMove]];
      // 이동 가능한 순수 좌표
      if (nx > -1 && nx < N && ny > -1 && ny < N) {
        // 상어가 없고
        if (area[nx][ny][0] === -1) {
          // 냄새도 없다면
          if (area[nx][ny][1] === 0) {
            // 기존 위치의 냄새 잔여 시간을 줄인다.
            area[lx][ly][1]--;
            // 마지막으로 상어의 영역으로 표시하고
            area[nx][ny] = [i, K];
            // 이동한다.
            currentSharks.set(i, [nx, ny]);
            break;
          } else {
            // 냄새가 있는데 자신의 것이라면 이동이 가능하다.
            if (area[nx][ny][1] !== 0 && area[nx][ny][0] === i) {
              // 기존 위치의 냄새 잔여 시간을 줄인다.
              area[lx][ly][1]--;
              // 상어의 영역으로 표시하고
              area[nx][ny] = [i, K];
              // 이동한다.
              currentSharks.set(i, [nx, ny]);
              break;
            }
            // 그렇지 않다면 이동하지 않는다.
          }
        } else {
          // 상어가 존재한다면 상어의 숫자를 비교한다.
          // 해당 위치의 상어가 자기보다 강하면 쫓겨난다.
          if (area[nx][ny][0] < i) {
            currentSharks.delete(i);
            // 약하면 쫓아낸다.
          } else if (area[nx][ny][0] > i) {
            currentSharks.delete(area[nx][ny][0]);
            // 기존 위치의 냄새 잔여 시간을 줄인다.
            area[lx][ly][1]--;
            // 상어의 영역으로 초기화하고
            area[nx][ny] = [i, K];
            // 이동한다.
            currentSharks.set(i, [nx, ny]);
            break;
          }
          // 같다면 이동하지 않는다.
        }
      }
    }
  }

  if (currentSharks.size > 1) {
    DFS(second++);
  } else {
    console.log(currentSharks);
    return second;
  }
};

console.log(DFS(1));

console.log(area);
