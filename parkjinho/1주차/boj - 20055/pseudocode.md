# 20055 컨베이어 벨트 위 로봇

```
n, k = map(int, input().split())
belt = 컨베이어벨트
robots = 로봇정보 0 or 1

time = 0

while True:

    # 1 - 벨트 회전
    벨트회전
    로봇회전
    if 내려가는 위치에 로봇있다면:
        로봇내리기

    # 2 - 로봇 이동
    for i in 내려가는 위치 전부터 올라가는 위치 역순으로 :
        if 로봇이 있고 and 다음 위치에 로봇이 없고 and 내구도가 0 이상이면:
            로봇 이동
            원래 위치 로봇 제거
            내구도 감소
    if 내려가는 위치에 로봇있다면:
        로봇내리기

    # 3 - 로봇 올리기
    if 올라가는 위치에 로봇 있다면
        올라가는 위치 내구도 감소
        로봇 올리기

    # 4 - 종료
    cnt = 내구도 0인 벨트 갯수
    for b in belt:
        if 내구도 0 이라면
            cnt += 1
    if cnt >= k:
        break

    time += 1

print(time+1)


```
