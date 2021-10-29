const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/코테협업js/JS-ThinkStack/sungmin/3주차/boj11559/input.txt', "utf8");
//const filePath = require("fs").readFileSync('/dev/stdin', "utf8");
let input = filePath.trim().split("\n");
input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));
input=input.map((e)=>e.split(""));

const dx=[0,1,0,-1];
const dy=[1,0,-1,0];

function check(x,y){
    if(x>=0 && x<12 && y>=0 && y<6) return true;
    else return false;
}

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
    getLength(){
        return this.array.length;
    }
}

function BFS(input,x,y,bcolor){
    let visited = Array.from({length:12},()=>Array.from({length:6},()=>0));
    let q= new Queue();
    let bombPos=[];
    q.enqueue([x,y]);
    visited[x][y]=1;
    bombPos.push([x,y]);
    while(q.getLength()>0){
        const [qx,qy]=q.dequeue();
        for(let i=0;i<4;i++){
            const nx = qx+dx[i];
            const ny = qy+dy[i];
            if(check(nx,ny)){
                if(input[nx][ny]===bcolor && visited[nx][ny]===0){
                    bombPos.push([nx,ny]);
                    q.enqueue([nx,ny]);
                    visited[nx][ny]=1;
                }
            }

        }
    }
    return bombPos;

}
function setMap(input){
    let pos;
    for(let i=0;i<6;i++){
        for(let j=11;j>=0;j--){
            if(input[j][i]==='.'){
                pos=[j,i];
                for(let k=j;k>=0;k--){
                    if(input[k][i]!=='.'){
                        input[pos[0]][pos[1]]=input[k][i];
                        input[k][i]='.';
                        break;
                    }
                }
            }
        }
    }
}

function solution(input){
    let bomb=1;
    let count=0;
    while(bomb){
        let bombCnt=0;
        for(let i=0;i<12;i++){
            for(let j=0;j<6;j++){
                if(input[i][j]!=='.'){
                    const bcolor = input[i][j];
                    const bombPos = BFS(input,i,j,bcolor);
                    if(bombPos.length>=4){
                        bombPos.map((e)=>{
                            const [x,y]=e;
                            input[x][y]='.';
                            
                        })
                        bombCnt++;
                    }
                }
            }
        }
        setMap(input);
        if(bombCnt===0)bomb=0;
        else count++;
    }
    console.log(count);
}
solution(input)