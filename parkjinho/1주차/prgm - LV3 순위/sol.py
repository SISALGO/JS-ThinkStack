# 플로이드 워셜 이용


def solution(n, results):

    INF = int(1e9)
    graph = [[INF]*(n+1) for _ in range(n+1)]

    for i in range(1, n+1):
        for j in range(1, n+1):
            if i == j:
                graph[i][j] = 0
    for result in results:
        s, e = result
        graph[s][e] = 1

    for k in range(1, n+1):
        for i in range(1, n+1):
            for j in range(1, n+1):
                graph[i][j] = min(graph[i][k]+graph[k][j], graph[i][j])

    for i in range(1, n+1):
        for j in range(1, n+1):
            if graph[i][j] != INF and graph[i][j] != 0:
                graph[i][j] = 1

    res = [0] * (n+1)
    for i in range(1, n+1):
        for j in range(1, n+1):
            if graph[i][j] != INF:
                res[i] += graph[i][j]
            if graph[j][i] != INF:
                res[i] += graph[j][i]

    return res.count(n-1)
