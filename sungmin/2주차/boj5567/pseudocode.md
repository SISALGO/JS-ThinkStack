# boj5567 결혼식

```
class Queue q 정의

visited = 1번의친구 혹은 친구의 친구일때 visited에 0->1 로 체크

input = 친구들의 관계 리스트
#1 1번자기 자신과 친구인 사이 visited에 체크 및 q에다가 1번의 친구를 넣어준다
input.forEach(ele => {
        const [a,b] =ele;
        if(a===1) q.enqueue(b),visited[b-1]=1;
        else if(b===1) q.enqueue(a),visited[a-1]=1;
    });

#2 q에 들어간 친구들을 차례대로 뽑아줘서 친구의 친구를 visited에 넣어준다
    while(q.length()!==0){
        const fixer = q.dequeue();
        input.forEach(ele => {  차례대로 input을 순회하면서 친구의 친구가 있는지 확인한다
            if(ele.indexOf(1)<0){  1번 자신과 관계인것은 필터링 해준다.
            const [a,b] =ele;
            친구의 친구가 맞다면 visited 해당 친구 인덱스에 로  0->1 할당
            if(a===fixer) visited[b-1]=1; 
            else if(b===fixer) visited[a-1]=1;
        }
        });
    }

#3 visited 배열에 1 인 요소만 카운팅한다 
let result = visited.filter(ele=>ele===1).length; 
```