function solution(board, N, angle) {
  if (angle < 0) {
    angle += 360;
  }

  const rotateCount = Math.floor(angle / 45);
  let centerRow = Math.floor(N / 2);
  let centerCol = Math.floor(N / 2);

  // N/2 회전을 할 것
  for (let i = 0; i < Math.floor(N / 2); i++) {
    const stdRow = centerRow - 1 - i;
    const stdCol = centerCol - 1 - i;

    for (let j = 0; j < rotateCount; j++) {
      const plus = i + 1;
      const sideLength = 3 + i * 2;
      const stdValue = board[stdRow][stdCol];

      //좌하 -> 좌상
      for (let k = 0; k < sideLength - 1; k += plus) {
        board[stdRow + k][stdCol] = board[stdRow + k + plus][stdCol];
      }
      //우하 -> 좌하
      for (let k = 0; k < sideLength - 1; k += plus) {
        board[stdRow + sideLength - 1][stdCol + k] =
          board[stdRow + sideLength - 1][stdCol + k + plus];
      }
      //우상 -> 우하
      for (let k = 1; k < sideLength; k += plus) {
        board[stdRow + sideLength - k][stdCol + sideLength - 1] =
          board[stdRow + sideLength - k - plus][stdCol + sideLength - 1];
      }
      //좌상 -> 우상
      for (let k = 1; k < sideLength; k += plus) {
        board[stdRow][stdCol + sideLength - k] =
          board[stdRow][stdCol + sideLength - k - plus];
      }
      board[stdRow][stdCol + plus] = stdValue;
    }
  }
  return board;
}

function init() {
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n'); //테스트 시 text 파일 명, 제출 시 /dev/stdin으로 path 설정
  let answer = [];

  const totalCount = +input[0];
  let startCount = 1;
  for (let i = 0; i < totalCount; i++) {
    let board = [];
    const NAngle = input[startCount].split(' ');
    startCount += 1;
    for (let j = 0; j < +NAngle[0]; j++) {
      board[j] = input[startCount].split(' ');
      startCount += 1;
    }

    answer = solution(board, +NAngle[0], +NAngle[1]);
    let ret = '';
    for (let a = 0; a < +NAngle[0]; a++) {
      for (let b = 0; b < +NAngle[0]; b++) {
        ret += answer[a][b] + ' ';
      }
      console.log(ret);
      ret = '';
    }
  }
}

init();
