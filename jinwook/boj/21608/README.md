<div align='center'>
    <img src="../../../images/boj.jpg" alt="BAEK JOON"/>
</div>
# 백준 21608 상어초등학교
<br>

## 문제 설명

### - 학생의 번호 그리고 그 학생이 좋아하는 학생의 번호가 한 줄의 입력으로 주어진다.

### - 3가지 기준을 차례로 적용시켜 학생을 배치시키는데, 비어있는 칸의 상,하,좌,우에 좋아하는 학생이 가장 많다면 그곳에 배치한다.

### - 좋아하는 학생 수가 동일한 자리가 2개 이상이면, 인접한 자리 중에 비어있는 자리가 가장 많은 자리로 선택한다.

### - 이 또한 여러개라면 먼저 행 기준으로 작은 자리, 이 또한 같다면 열 기준으로 작은 자리를 선택한다.

<br>

## 포인트

### - 첫번째 학생의 경우 무조건 [1,1] 좌표에 위치시킨다

### - 행 기준으로 작은자리, 열 기준으로 작은 자리를 선정하는 것은 오름차순 정렬을 통해 구현할 수 있다.(오름차순 후 가장 첫번째 요소)

<br>

## Pseudo Code

```
solution(N,입력데이터){
  answer = 0 
  map = new Array(N) 
  
  : 초기화
  for (i = 0 ~ map.length) {
    map[i] = new Array(N).fill(0) 
  }

  for (i = 0 ~ data.length) {
    const nowStudent = data[i][0] 
    if (i === 0) {
      map[1][1] = nowStudent 
      continue 
    }

    : 좋아하는 학생이 가장 많이 인접한 칸 찾기
    maxLikeStudent = getMaxLikeStudent(data[i], map) 

    : 비어있는 칸 가장 많은 것 구하기
    maxEmptySpace = getMaxEmptySpace(map, maxLikeStudent) 

    : 학생 배치
    setStudent(map, maxEmptySpace, nowStudent) 
  }
  
  : 현재 학생의 data에서의 인덱스 map에 저장시키기
  dataMap = new Map()
  for (i = 0 ~ data.length) {
    dataMap.set(data[i][0], i)
  }

  : 인접한 칸의 학생 수 및 점수 구하기
  for (row = 0 ~ map.length) {
    for (col = 0 ~ map.length) {
      : 현재 교실 위치의 학생의 입력 순서
      idx = +dataMap.get(map[row][col])
      cnt = 0
      if (row - 1 >= 0) {
        if(map[row +1 or -1][col +1 or -1] in data[idx]){
            cnt++
        }
        
      : 점수 더하기
      if (cnt === 1) {
        answer += 1
      } else if (cnt === 2) {
        answer += 10
      } else if (cnt === 3) 
        answer += 100
      } else if (cnt === 4) {
        answer += 1000
      }
      
    }
  }

  return answer
}

: 인접한 칸에 좋아하는 학생이 가장 많은 구하기
getMaxLikeStudent(nowData,map){
    maxLikeStudent = []
    maxCnt = 0
    for (let row = 0 < 교실 행 크기) {
        for (let col < 교실 열 크기) {
            : 인접한 칸에 있는 학생이 현재 학생이 좋아하는 학생인 경우 cnt+1
            if(map[row +1 or -1][col +1 or -1] in nowData) {
                cnt++
            }
            : maxCnt 갱신 되면 maxLikeStudent를 새로 할당, maxCnt와 cnt가 같으면 유지되면 추가
            if (maxCnt < cnt){
                maxCnt = cnt
                maxLikeStudent = [[row, col]]
              }else if (maxCnt == cnt){
                maxLikeStudent.push([row, col])
            }
        }
    }
    return maxLikeStudent
}

:좋아하는 학생이 가장 많은 자리에서 주변에 공백이 가장 많은 칸 구하기
function getMaxEmptySpace(map, maxLikeStudent) {
  maxEmptySpace = []
  maxCnt = 0
  for (i ~ maxLikeStudent.length) {
    row = maxLikeStudent[i][0]
    col = maxLikeStudent[i][1]
    cnt = 0 

    : 인접한 칸이 비워져 있으면 cnt+1
    if(map[row +1 or -1][col +1 or -1] == 0) {
        cnt++
    }
    
    : maxCnt 갱신 되면 maxEmptySpace 새로 할당, maxCnt와 cnt가 같으면 유지되면 추가
    if (maxCnt < cnt) {
      maxCnt = cnt
      maxEmptySpace = [[row, col]]
    } else if (maxCnt === cnt) {
      maxEmptySpace.push([row, col])
    }
  }

  //행이 가장 낮은 것으로 오름차순, 같다면 열이 가장 낮은 것 기준으로 오름차순
  maxEmptySpace.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0] 
    } else {
      return a[1] - b[1] 
    }
  })
  return maxEmptySpace 
}

:최적 값으로 학생을 교실에 배치
setStudent (map, maxEmptySpace, nowStudent){
  : 이미 정렬되었으므로 가장 먼저 나오는 좌표가 최적 값, map에 학생 배치
  for (i = 0 ~ maxEmptySpace.length) {
    const finalRow = maxEmptySpace[0][0] 
    const finalCol = maxEmptySpace[0][1] 
    map[finalRow][finalCol] = nowStudent 
    break 
  }
  return map 
}

```

