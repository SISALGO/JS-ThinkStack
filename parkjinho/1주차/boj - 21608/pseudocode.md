# 21608 상어초등학교

```
n = 격자높이,너비
infos = 학생정보 (학생번호,선호1,선호2,선호3,선호4)
student_dic = key=학생번호, value=선호학생 튜플

dx = [0, 1, 0, -1] 좌표 설정
dy = [1, 0, -1, 0] 좌표 설정

for _ in range(n ** 2):
    infos.append(학생번호,선호1,선호2,선호3,선호4)
class_room = 교실정보 - 격자형태

for 학생하나의정보 in 학생정보들:
    stn, likes = 학생번호, 선호하는학생들

    empty_cell = 비어있는 자리 모음 배열 -> [(x좌표, y좌표, 비어있는 자리갯수, 좋아하는 학생 수)...]
    for i in range(n):
        for j in range(n):
            if class_room[i][j] == 0:
                x, y = i, j
                empty_cnt = 비어있는 자리 갯수
                likes_cnt = 좋아하는 주변 학생 수

                for d in range(4):
                    ni = 4방향 새 i 좌표
                    nj = 4방향 새 j 좌표

                    if 0 <= 4방향 새 i 좌표 <= n - 1 and 0 <= 4방향 새 j 좌표 <= n - 1 and 각 클래스 셀이 비어있다면:
                        empty_cnt += 1

                    if 0 <= 4방향 새 i 좌표 <= n - 1 and 0 <= 4방향 새 j 좌표 <= n - 1 and 각 클래스 셀이 비어있다면:
                        likes_cnt += 1

                empty_cell.append((x, y, empty_cnt, likes_cnt))

    empty_cell.sort(선호학생수, 비어있는 자리 갯수, 행, 열 순으로 정렬)
    target_x, target_y = 학생이 배치될 자리
    class_room[target_x][target_y] = 학생번호

answer = 답
for i in range(n):
    for j in range(n):
        like_cnt = 선호 학생 수
        for d in range(4):
            선호 학생수 계산
        if like_cnt == 1:
            answer += 1
        elif like_cnt == 2:
            answer += 10
        elif like_cnt == 3:
            answer += 100
        elif like_cnt == 4:
            answer += 1000

return answer





```
