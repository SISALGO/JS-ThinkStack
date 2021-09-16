n = int(input())
infos = []
student_dic = {}
dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]
for _ in range(n ** 2):
    infos.append(tuple(list(map(int, input().split()))))
class_room = [[0] * n for _ in range(n)]

for info in infos:
    stn, likes = info[0], info[1:]
    student_dic[info[0]] = info[1:]

    empty_cell = []
    for i in range(n):
        for j in range(n):
            if class_room[i][j] == 0:
                x, y = i, j
                empty_cnt = 0
                likes_cnt = 0
                for d in range(4):
                    ni = i + dx[d]
                    nj = j + dy[d]
                    if 0 <= ni <= n - 1 and 0 <= nj <= n - 1 and class_room[ni][nj] == 0:
                        empty_cnt += 1
                    if 0 <= ni <= n - 1 and 0 <= nj <= n - 1 and class_room[ni][nj] in likes:
                        likes_cnt += 1
                empty_cell.append((x, y, empty_cnt, likes_cnt))

    empty_cell.sort(key=lambda k: (-k[3], -k[2], k[0], k[1]))
    target_x, target_y = empty_cell[0][0], empty_cell[0][1]
    class_room[target_x][target_y] = stn

answer = 0
for i in range(n):
    for j in range(n):
        like_cnt = 0
        for d in range(4):
            ni = i + dx[d]
            nj = j + dy[d]
            if 0 <= ni <= n - 1 and 0 <= nj <= n - 1 and class_room[ni][nj] in student_dic[class_room[i][j]]:
                like_cnt += 1
        if like_cnt == 1:
            answer += 1
        elif like_cnt == 2:
            answer += 10
        elif like_cnt == 3:
            answer += 100
        elif like_cnt == 4:
            answer += 1000

print(answer)
