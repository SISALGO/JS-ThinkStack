//const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/코테협업js/JS-ThinkStack/sungmin/2주차/boj14503/input.txt', "utf8");
const filePath = require("fs").readFileSync('/dev/stdin', "utf8");
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

function Check(N,M,x,y,input){
    if(x>=0 && x<N && y>=0 && y<M){
        if(input[x][y]===0) return 1;
        else return 0;
    }else return 0;
}
function CheckBack(N,M,x,y,input){
    if(x>=0 && x<N && y>=0 && y<M){
        if(input[x][y]===2) return 1;
        else return 0;
    }else return 0;
}
function solution(N,M,r,c,d,input){
    let answer =1;
    let flag =1;
    input[r][c]=2;
    let count =0;
    while(flag){
        const [dx,dy]=dir[d];
        let check = Check(N,M,r+dx,c+dy,input);
        if(check===1){
            r = r+dx;
            c = c+dy;
            input[r][c]=2;
            d=d<1?3:d-1;
            count=0;
            answer++;
        }else if(count===4){
            const [bx,by]=back[d];
            check = CheckBack(N,M,r+bx,c+by,input);
            if(check){
            r = r+bx;
            c = c+by;
            count =0;
            }
            else flag=0;
        }
        else{
            d=d<1?3:d-1;
            count ++;
        }
    }

    console.log(answer);

}

solution(N,M,r,c,d,input);