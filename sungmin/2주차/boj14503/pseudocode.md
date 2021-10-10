# boj14503 청소기

```
r,c,d = r 북에서 떨어진 위치, c 서쪽에서 떨어진 위치, d 현재 가르키는 방향

Check(N,M,x,y,input) 좌표 x,y 로 갈수있는지 및 x,y 좌표 값이 0인지 체크
CheckBack(N,M,x,y,input) 좌표 x,y 가 뒤로 갈수있는지 체크

while(flag)

const [dx,dy]=dir[d]; 지금 방향기준 왼쪽 한칸 이동좌표

Check(N,M,r+dx,c+dy,input) 갈수있는 방향인지 체크
if(check===1) 갈수있으면 해당위치로 이동
아니면 방향을 왼쪽으로 전환하고 count++ 
if(count===4) 4방향 다 갈곳 없으면
    CheckBack(N,M,r+bx,c+by,input) 뒤로갈수있는지 체크
    뒤로 못가면 while 문 탈출 및 청소기가 갔던곤 체크
    뒤로 갈수있으면 뒤로 한칸 후진. 다시 처음부터 체크
 
```