

def solution(N, number):
    global min_len

    min_len = 1e9

    def dfs(L, tot, count):
        global min_len
        if count > 8:
            return
        if int(tot) == number:
            min_len = min(count, min_len)

        for s in range(1, 9):
            nxt = int(str(N)*s)
            dfs(L+1, tot + nxt, count + s)
            dfs(L+1, tot - nxt, count + s)
            dfs(L+1, tot * nxt, count + s)
            dfs(L+1, tot / nxt, count + s)

    dfs(0, 0, 0)
    if min_len == 1e9:
        return -1
    else:
        return min_len
