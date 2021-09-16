n, m = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(n)]
num = int(input())
dp = [[0]*(m+1) for _ in range(n+1)]
dp[1][1] = grid[0][0]

for i in range(1, n+1):
    for j in range(1, m+1):
        dp[i][j] = dp[i-1][j] + dp[i][j-1] + grid[i-1][j-1] - dp[i-1][j-1]

for _ in range(num):
    sx, sy, ex, ey = map(int, input().split())
    print(dp[ex][ey]-dp[ex][sy-1]-dp[sx-1][ey]+dp[sx-1][sy-1])
