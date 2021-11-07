const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/코테협업js/JS-ThinkStack/sungmin/4주차/boj16918/input.txt', "utf8");
//const filePath = require("fs").readFileSync('/dev/stdin', "utf8");
let input = filePath.trim().split("\n");
input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));

const [R,C,N] = input[0].split(" ").map(e=>+e);
input.shift();
input = input.map(ele=>ele.split(""));

const dx=[0,1,-1,0];
const dy=[1,0,0,-1];

const fullBomb = Array.from({length:R},()=>Array.from({length:C},()=>'O'));
let bombMap = JSON.parse(JSON.stringify(fullBomb));

let bombPosition =[];
for(let i=0;i<R;i++){
    for(let j=0;j<C;j++){
        if(input[i][j]==='O') bombPosition.push([i,j]);
    }
}

function checkRange(x,y,r,c){
    if(x>=0 && x<r && y>=0 && y<c)return true;
    else return false;
}

bombPosition.forEach(ele=>{
    const [x,y]=ele;
    bombMap[x][y]='.';
    for(let i=0;i<4;i++){
        const nx = x+dx[i];
        const ny = y+dy[i];
        if(checkRange(nx,ny,R,C)){
            if(bombMap[nx][ny]==='O'){
                bombMap[nx][ny]='.';
            }
        }

    }
})
let answer ;
if(N>1){
if(N%2===0){
    answer=fullBomb;
}
else if((N-1)%4===0){
    answer=input;
}
else{
    answer=bombMap;
}
}else{
    answer=input;
}


answer.forEach(ele=>{
    console.log(ele.join(''));
})