
let land=[[1,2,3,5],[5,6,7,8],[4,3,2,1]];

function solution(land){
    let answer=0;
    for(let i=land.length-2;i>=0;i--){
        land[i][0]=Math.max(land[i+1][1],land[i+1][2],land[i+1][3])+land[i][0];
        land[i][1]=Math.max(land[i+1][0],land[i+1][2],land[i+1][3])+land[i][1];
        land[i][2]=Math.max(land[i+1][0],land[i+1][1],land[i+1][3])+land[i][2];
        land[i][3]=Math.max(land[i+1][0],land[i+1][1],land[i+1][2])+land[i][3];
    }
    answer=Math.max(land[0][0],land[0][1],land[0][2],land[0][3]);
    return answer;
}
console.log(solution(land));