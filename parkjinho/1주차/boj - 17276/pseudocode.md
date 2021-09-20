# 21608 상어초등학교

```
T = int(input())
for _ in range(T):
    n, degree = 격자 높이 and 너비, 회전각도
    grid = 격자

    copied = 돌린 격자 값을 넣을 그래프
    depth = 격자 깊이마다 들어갈 값들
    pos = 격자 깊이마다 들어갈 좌표들

    ex)
     1  2  3  4  5
     6  7  8  9 10
    11 12 13 14 15
    16 17 18 19 20
    21 22 23 24 25

    ex)
    depth == 1 : [1,3,5,15,25,23,21,11]
    depth == 2 : [7,8,9,14,19,18,17,12]


    ex) depth 1일 때
    for d 0 ~ 격자높이 / 2 만큼:

        # 위 -> 1*,2,3*,4
        for col in range(d, n-d-1, n//2-d):
            depth[d].append(grid[d][col])
            pos[d].append((d, col))

        # 오른 -> 5*,10,15*,20
        for row in range(d, n-d-1, n//2-d):
            depth[d].append(grid[row][n-d-1])
            pos[d].append((row, n-d-1))

        # 아래 -> 25*,24,23*,22
        for col in range(n-d-1, d, -(n//2-d)):
            depth[d].append(grid[n-d-1][col])
            pos[d].append((n-d-1, col))

        # 왼 -> 21*,16,11*,6
        for row in range(n-d-1, d, -(n//2-d)):
            depth[d].append(grid[row][d])
            pos[d].append((row, d))

    # rotate
    for k 0 ~ 격자 높이 / 2만큼:
        rotate_cnt = 회전횟수
        tmp = 임시변수

        while 회전횟수 > 0: # 회전
            if degree < 0:
                tmp.append(tmp.pop(0)) # 왼쪽 회전
            else:
                tmp.insert(0, tmp.pop()) # 오른쪽 회전
            회전횟수 -= 1
        depth[k] = tmp[:]

    for k 0 ~ 격자 높이 / 2만큼:
        for s depth마다 들어간 값의 길이:
            # 회전된 값 복사
            copied[pos[k][s][0]][pos[k][s][1]] = depth[k][s]

    for i 0~n:
        for j 0~n:
            # 고정된 값 복사
            if copied[i][j] == 0:
                copied[i][j] = grid[i][j]

    for c in copied:
        print(*c)




```
