# 1966 프린터큐
```
TC = 테스트 케이스 갯수
클래스 Queue 구현
answerList = 답 리스트
function solution(TC,input){


for(let i=0;i<TC;i++){
    flag = 1 or 0
    answer = 찾고싶은 문서 출력순서
    N,M = 문서 배열 길이,찾고싶은 문서 위치
    q.array= 테스트 케이스 중요도 배열 입력 
    while(flag) {
        #1.front = 중요도 배열 첫번째 문서 받아온다
        #2.q.array순회하면서 front보다 큰 값이 있는지 확인
        if 큰 값이 있는경우 front 문서를 q 제일뒤에 배치 후 q.array순회탈출
        if 큰 값이 없으면 front 해당문서 출력
        #3 if 출력해당문서 index와 M 이 같다면 answerList.push(answer+1); flag=0; (while문 탈출)
        

        

    }

    answerList.map((ele)=>console.log(ele)); 답출력



}

}
```