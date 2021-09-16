# LV3 순위

```
# 어떤 사람의 순위를 알려면 그 사람과 다른 사람들의 모든 승패 결과가 존재해야한다.
# 즉 사람이 5명이라면 2번 사람의 순위가 정해지기 위해 1,3,4,5와의 승패 여부를 알아야한다.
# DFS 그래프 탐색으로 접근했다 시간초과 발생하여 플로이드 워셜로 변경
# 모든 사람과 모든 사람의 경로(승패여부)를 알 수 있으므로 적절함
# 플로이드 워셜 -> O(N^3) 이므로 O(100*100*100)

solution(사람수, 승패 정보):

    INF = 무한대
    graph = 격자 표현

    # 플로이드 워셜 수행

    for i in 사람수:
        for j in 사람수:
            if i == j:
                자기 자신으로 가는 법은 0

    for result in results:
        s, e = 시작노드, 끝노드
        갈 수 있는 곳 = 1

    for k 사람수:
        for i 사람수:
            for j 사람수:
                # 최단거리 업데이트 - 갈 수 있는지 여부 업데이트
                graph[i][j] = min(graph[i][k]+graph[k][j], graph[i][j])

    for i 사람수:
        for 사람수:
            if 갈 수 있다면 :
                graph[i][j] = 1

    res = [0] * (n+1)
    for i in range(1, n+1):
        for j in range(1, n+1):
            if i,j노드에 도달할 수 있다면 :
                res[i] += graph[i][j] # 승리
            if j,i노드에 도달할 수 있다면 :
                res[i] += graph[j][i] # 패배

    return n-1의 사람과 승패 여부를 알 수 있다면 순위 결정 가능

```
