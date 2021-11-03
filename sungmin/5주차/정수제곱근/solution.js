let n=3;

function solution(n) {
    let answer = 0;
    if(Number.isInteger(Math.sqrt(n))){
        let s=Math.sqrt(n);
        answer=(s+1)*(s+1);
    }else{
        answer=-1;
    }
    return answer;
}
console.log(solution(n));