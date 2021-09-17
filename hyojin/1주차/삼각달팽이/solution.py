def solution(n):
    answer = []
    temp=[]
    for i in range(1,n+1):
        temp.append([0]*i)
    x,y=0,-1
    num=1
    for i in range(n):
        for j in range(i,n):
            if i%3==0:
                y+=1
            elif i%3==1:
                x+=1
            elif i%3==2:
                x-=1
                y-=1
            temp[y][x]=num
            num+=1
    answer=sum(temp,[])
    return answer