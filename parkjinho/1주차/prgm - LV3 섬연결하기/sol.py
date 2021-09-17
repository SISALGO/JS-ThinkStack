# MST
def union_parent(parent, a, b):
    a = find_parent(parent, a)
    b = find_parent(parent, b)
    if a < b:
        parent[b] = a
    else:
        parent[a] = b


def find_parent(parent, x):
    if x != parent[x]:
        parent[x] = find_parent(parent, parent[x])
    return parent[x]


def solution(n, costs):

    parent = [0]*n
    for i in range(n):
        parent[i] = i

    edges = []
    for cost in costs:
        s, e, c = cost
        edges.append((c, s, e))
    edges.sort()

    res = 0
    for edge in edges:
        c, s, e = edge
        if find_parent(parent, s) != find_parent(parent, e):
            res += c
            union_parent(parent, s, e)

    return res
