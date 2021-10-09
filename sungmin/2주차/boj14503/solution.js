const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/코테협업js/JS-ThinkStack/sungmin/2주차/boj14503/input.txt', "utf8");
//const filePath = require("fs").readFileSync('/dev/stdin', "utf8");
let input = filePath.trim().split("\n");
input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));

const [N,M] = input[0].split(' ').map((e)=>+e);
const [r,c,d] = input[1].split(' ').map((e)=>+e);
input.shift();
input.shift();
input = input.map((ele)=>{
    return ele.split(' ').map((e)=>+e);
})

const dir = [[0,-1],[-1,0],[0,1],[1,0]];
const back =[[1,0],[0,-1],[-1,0],[0,1]];


function Check(N,M,r,c,input,d){
    let answer =0;
    switch(d){
        case 0:
            if(input[r].slice(0,c).indexOf(0)>=0) answer=1;
            else answer=0;
            break;
        case 1:
            for(let i=0;i<r;i++){
                if(input[i][c]===0){
                    answer=1;
                    break;
                }
            }
            break;
        case 2:
            if(input[r].slice(c).indexOf(0)>=0) answer=1;
            else answer=0;
            break;
        case 3:
            for(let i=r;i<M;i++){
                if(input[i][c]===0){
                    answer=1;
                    break;
                }
            }
            break;
        default:
            break;
    }
    const [dx,dy]=dir[d];
    if(answer && r+dx>=0 && r+dx<N && c+dy>=0 && c+dy<M){
        if(input[r+dx][c+dy]!==1){
            return 1;
        }
        else return 0;
    }else{
        return 0;
    }
}


function solution(N,M,r,c,d,input){
    answer =1;
    input[r][c] =2;
    let flag=1;
    let count =0;
    while(flag){
        let check=Check(N,M,r,c,input,d);
        if(check){
            const [dx,dy]=dir[d];
            d=d>0?d-1:3;
            r = r+dx;
            c = c+dy;
            if(input[r][c]===0){
            input[r][c]=2;
            answer++;
            }
            count =0;
        }else if(count!==4){
            count++;
            d=d>0?d-1:3;
        }else if(count===4){
            const [bx,by] = back[d];
            if(r+bx<0 || r+bx>=N || c+by<0 || c+by>=M ){
                flag =0;
            }else if(input[r+bx][c+by]===1){
                flag =0;
            }
            else{
                r=r+bx;
                c=c+by;
                count =0;
            }

        }
    }
    console.log(answer);
}

solution(N,M,r,c,d,input)
