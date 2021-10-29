function solution(progresses, speeds) {
    let answer = [];
    while(progresses.length>0){
        for(let i=0;i<progresses.length;i++){
            if(progresses[i]<100){   
                progresses[i]+=speeds[i];
            }
        }
        let popCount=0;
        while(1){
            if(progresses[0]>=100){
                popCount++;
                speeds.shift();
                progresses.shift();
            }else{
                break;
            }
        }
        if(popCount>0)answer.push(popCount);
    }
    console.log(answer);
}

solution([95, 90, 99, 99, 80, 99],[1, 1, 1, 1, 1, 1])