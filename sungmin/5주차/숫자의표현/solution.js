function solution(n) {
    let answer = 0;
    for(let i=1;i<=n;i++){
        let num=i;
        let sumNum=i
        while(sumNum<n){
            sumNum+=++num;
        }
        if(sumNum===n) answer++;
    }
    return answer;
}

solution(15);