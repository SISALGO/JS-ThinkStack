n, k = map(int, input().split())
belt = list(map(int, input().split()))
robots = [0]*2*n

time = 0

while True:

    # 1 - 벨트 회전
    belt.insert(0, belt.pop())
    robots.insert(0, robots.pop())
    if robots[n-1] == 1:
        robots[n-1] = 0

    # 2 - 로봇 이동
    for i in range(n-2, -1, -1):
        if robots[i] == 1 and robots[i+1] == 0 and belt[i+1] > 0:
            robots[i+1] = 1
            robots[i] = 0
            belt[i+1] -= 1
    if robots[n-1] == 1:
        robots[n-1] = 0

    # 3 - 로봇 올리기
    if belt[0] > 0:
        belt[0] -= 1
        robots[0] = 1

    # 4 - 종료
    cnt = 0
    for b in belt:
        if b == 0:
            cnt += 1
    if cnt >= k:
        break

    time += 1

print(time+1)
