const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/코테협업js/JS-ThinkStack/sungmin/3주차/boj8911/input.txt', "utf8");
//const filePath = require("fs").readFileSync('/dev/stdin', "utf8");
let input = filePath.trim().split("\n");
input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));
const T = input[0];
input.shift();

const dx=[-1,0,1,0];
const dy=[0,1,0,-1];

function move(x,y,d,ele){
    let [nx,ny,nd]=[0,0,0];
    switch(ele){
        case "F":
            nx=x+dx[d];
            ny=y+dy[d];
            nd=d;
            return [nx,ny,nd];
        case "B":
            nx=x-dx[d];
            ny=y-dy[d];
            nd=d;
            return [nx,ny,nd];
        case "L":
            nx=x;
            ny=y;
            nd=d>0?d-1:3;
            return [nx,ny,nd];
        case "R":
            nx=x;
            ny=y;
            nd=d>2?0:d+1;
            return [nx,ny,nd];
        default:
            return [x,y,d];   
    }

}
function solution(input){
    let result=[];
    input.forEach(ele => {
        let [right,left,top,bottom,x,y,d]=[0,0,0,0,0,0,0];
        for(let i=0;i<ele.length;i++){
            [x,y,d]=move(x,y,d,ele[i]);
            left = left>y?y:left;
            right=right<y?y:right;
            top=top>x?x:top;
            bottom=bottom<x?x:bottom;
        }
        let answer = Math.abs(bottom-top)*Math.abs(left-right);
        result.push(answer);
    });
    result.map(ele=>console.log(ele));
}
solution(input);