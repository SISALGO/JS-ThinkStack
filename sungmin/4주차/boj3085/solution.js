const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/코테협업js/JS-ThinkStack/sungmin/4주차/boj3085/input.txt', "utf8");
//const filePath = require("fs").readFileSync('/dev/stdin', "utf8");
let input = filePath.trim().split("\n");
input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));
const N=input[0];
input.shift();
input = input.map(e=>e.split(''));

const dx=[-1,0,1,0];
const dy=[0,1,0,-1];
function checkRange(x,y,N){
    if(x>=0 && x<N && y>=0 && y<N) return true;
    else return false;
}
function getAroundCandy(x,y,input,N){
    let result=[];
    for(let i=0;i<4;i++){
        const nx=x+dx[i];
        const ny=y+dy[i];
        let j=i===3?0:i+1;
        if(checkRange(nx,ny,N)){
            if(checkRange(x+dx[j],y+dy[j],N)){
                result.push([[nx,ny],[x+dx[j],y+dy[j]]]);
            }
        }
    }
    return result;
}
function countCandy(x,y,input,char){
    let countRow=0;
    let countColumn=0;
    let 
    while(1){
        let plusRowX = y++;

    }

}