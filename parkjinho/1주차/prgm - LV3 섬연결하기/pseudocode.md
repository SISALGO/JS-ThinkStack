# LV3 섬연결하기

```
# 최소비용신장트리 문제
# 크루스칼 알고리즘으로 해결

union_parent(parent, a, b): # 두 원소가 속한 집합을 합침
    a = a의 루트노드
    b = b의 루트노드
    if a < b:
        b의 부모는 a
    else:
        a의 부모는 b


find_parent(parent, x): # 어떤 원소가 속한 집합의 루트노드 반환
    if x != parent[x]:
        parent[x] = 루트노드 찾을때까지 재귀 탐색
    return parent[x]


solution(노드갯수, 간선정보):

    parent = 각 노드들의 부모노드 정보
    for i 노드 갯수만큼:
        parent[i] 자기 자신을 부모로 초기화

    edges = 간선정보
    for cost in costs:
        s, e, c = cost
        edges.append((c, s, e))

    edges.sort() # 간선정보를 가중치 순으로 오름차순 정렬

    res = 가중치합
    for edge in edges:
        c, s, e = edge
        if 사이클이 발생하지 않는다면
            간선 가중치를 답에 합함
            두 원소가 속한 집합을 합침

    return res


```
