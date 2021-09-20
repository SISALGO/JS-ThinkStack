
T = int(input())
for _ in range(T):
    n, degree = map(int, input().split())
    grid = [list(map(int, input().split())) for _ in range(n)]

    copied = [[0]*n for _ in range(n)]
    depth = [[] for _ in range(n//2)]
    pos = [[] for _ in range(n//2)]
    for d in range(n//2):
        # 위
        for col in range(d, n-d-1, n//2-d):
            depth[d].append(grid[d][col])
            pos[d].append((d, col))
        # 오른
        for row in range(d, n-d-1, n//2-d):
            depth[d].append(grid[row][n-d-1])
            pos[d].append((row, n-d-1))
        # 아래
        for col in range(n-d-1, d, -(n//2-d)):
            depth[d].append(grid[n-d-1][col])
            pos[d].append((n-d-1, col))
        # 왼
        for row in range(n-d-1, d, -(n//2-d)):
            depth[d].append(grid[row][d])
            pos[d].append((row, d))

    # rotate
    for k in range(n//2):
        rotate_cnt = abs(degree) // 45
        tmp = depth[k][:]
        while rotate_cnt > 0:
            if degree < 0:
                tmp.append(tmp.pop(0))
            else:
                tmp.insert(0, tmp.pop())
            rotate_cnt -= 1
        depth[k] = tmp[:]

    for k in range(n//2):
        for s in range(len(depth[k])):
            copied[pos[k][s][0]][pos[k][s][1]] = depth[k][s]

    for i in range(n):
        for j in range(n):
            if copied[i][j] == 0:
                copied[i][j] = grid[i][j]

    for c in copied:
        print(*c)

