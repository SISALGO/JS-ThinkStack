const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/코테협업js/JS-ThinkStack/sungmin/3주차/boj2636/input.txt', "utf8");
//const filePath = require("fs").readFileSync('/dev/stdin', "utf8");
let input = filePath.trim().split("\n");
input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));

const [N,M]=input[0].split(" ").map(e=>+e);
input.shift();
input=input.map((e)=>e.split(" ").map(e=>+e));
const dx=[1,0,-1,0];
const dy=[0,1,0,-1];
class Queue{
    constructor(){
        this.array=[];
    }
    enqueue(data){
        this.array.push(data);
    }
    dequeue(){
        return this.array.shift();
    }
    length(){
        return this.array.length;
    }
}
function check(x,y,N,M){
    if(x>=0 && x<N && y>=0 && y<M) return true;
    else return false;
}

function BFS(N,M,input){
    let visited=Array.from({length:N},()=>Array.from({length:M},()=>0));
    let q=new Queue();
    q.enqueue([0,0]);
    visited[0][0]=1;
    while(q.length()>0){
        let [x,y]=q.dequeue();
        for(let i=0;i<4;i++){
            const nx=x+dx[i];
            const ny=y+dy[i];
            if(check(nx,ny,N,M)){
                if(input[nx][ny]===0 && visited[nx][ny]===0){
                    q.enqueue([nx,ny]);
                    visited[nx][ny]=1;
                }else if(input[nx][ny]===1){
                    input[nx][ny]=2;
                }
            }
        }
    }
    return input;
}

function solution(N,M,input){
    let time=0;
    let lastCheese=0;
    let flag=1;
    while(flag){
        flag=0;
        for(let i=0;i<N;i++){
            if(input[i].indexOf(1)>0){
                flag=1;
                break;
            }
        }
        if(flag===0){
            console.log(time);
            console.log(lastCheese);
        }
        else{
            lastCheese=0;
            BFS(N,M,input);
            time++;
            for(let i=0;i<N;i++){
                for(let j=0;j<M;j++){
                    if(input[i][j]===2){
                        lastCheese++;
                        input[i][j]=0;
                    }else if(input[i][j]===1){
                        lastCheese++;
                    }
                }
            }

        }

    }
}

solution(N,M,input)