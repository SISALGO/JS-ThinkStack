<div align='center'>
    <img src="../../../images/boj.jpg" alt="BAEK JOON"/>
</div>
# 백준 12726 배열 돌리기
<br>

## 문제 설명

### - 45도의 배수 만큼 각 중심을 지나는 축을 회전시킨다.

### - 입력 각도는 -360에사 360사이로 주어진다.


<br>

## 포인트

### - 배열의 중심을 하나의 사각형으로 간주하고 이를 둘라싼 사각형을 차례로 주어진 각도 만큼 회전을 시킨다.
### - 각 사각형에서 회전이 시작되는 좌표는 중심 행-1, 중심 열-1이다. 
<br>

## Pseudo Code

```
solution(board, N, angle) {
  : 각도가 음수일 경우, 양수를 맞춰줌
  if (angle < 0) {
    angle += 360;
  }
  
  : 각도를 45도로 나누어 45도 기준으로 회전 수를 구한다 
  const rotateCount = Math.floor(angle / 45);
  let centerRow = Math.floor(N / 2);
  let centerCol = Math.floor(N / 2);

  : 0행부터 가운데 행 까지
  for (i = 0 ~ Math.floor(N / 2)) {
    const stdRow = centerRow - 1 - i;
    const stdCol = centerCol - 1 - i;

    : 45도 회전 수 만큼
    for (j = 0; ~ rotateCount) {
      const plus = i + 1;
      const sideLength = 3 + i * 2;
      const stdValue = board[stdRow][stdCol];

      :좌하 -> 좌상 회전
      for (k = 0 ~ sideLength - 1, k += plus) {
        board[stdRow + k][stdCol] = board[stdRow + k + plus][stdCol];
      }
      
      :우하 -> 좌하 회전
      for (k = 0 ~ sideLength - 1, k += plus) {
        board[stdRow + sideLength - 1][stdCol + k] =
          board[stdRow + sideLength - 1][stdCol + k + plus];
      }
      
      :우상 -> 우하 회전
      for (k = 1 ~ sideLength, k += plus) {
        board[stdRow + sideLength - k][stdCol + sideLength - 1] =
          board[stdRow + sideLength - k - plus][stdCol + sideLength - 1];
      }
      
      :좌상 -> 우상 회전
      for (k = 1 ~ sideLength; k += plus) {
        board[stdRow][stdCol + sideLength - k] =
          board[stdRow][stdCol + sideLength - k - plus];
      }
      :기준점으로 부터 한 칸 왼쪽에 기준값을 저장
      board[stdRow][stdCol + plus] = stdValue;
    }
  }
  return board;
}

```

