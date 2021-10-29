function solution(name) {
    let answer = 0;
    let right =0;
    let left=0;
    let index=0;
    let r_cnt=0;
    let l_cnt=0;
    while(1){
        if(name.charCodeAt(right)!==65) break;
        else {
            right = right===name.length-1?0:right+1;
            r_cnt++;
        }
    }
    while(1){
        if(name.charCodeAt(left)!==65) break;
        else {
            left = left===0?name.length-1:left--;
            l_cnt++;
        }
    }

    
    return answer;
}

//solution("JEROEN");

console.log('A'+3);