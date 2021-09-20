핵심 아이디어: x,y 좌표 구해서 값을 넣는다.

def solution(높이):
    temp 초기화
    x,y=0,-1
    num=1

    for 방향 in n:
        for j in (i~n):
            if 아래: 방향%3==0:
                y+=1
            elif 오른쪽: 방향%3==1:
                x+=1
            elif 위: 방향%3==2:
                x-=1
                y-=1
            temp[y][x]=num
            num+=1