const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/코테협업js/JS-ThinkStack/sungmin/2주차/boj21608/input.txt', "utf8");
//const filePath = require("fs").readFileSync('/dev/stdin', "utf8");
let input = filePath.trim().split("\n");
input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));

N = +input[0];
input.shift();
let classMap = Array.from({length: N},()=> Array.from({length:N},()=>0));
input = input.map((e)=>e.split(" ").map((e)=>+e));
const dx=[-1,1,0,0]; //행 (상 하 좌 우) 
const dy=[0,0,-1,1];//열 (상 하 좌 우) 
function check(N,x,y){ //범위 안에 있는지 체크 하는 함수 
    if(x>=0 && x<N && y>=0 && y<N) return true;
    else return false;
}
function f1(favStu,classMap,N){//비어있는 칸 중에서 좋아하는 학생이 인접한 칸에 가장 많은 칸으로 자리를 정한다.
                                //1을 만족하는 칸이 여러 개이면,여러개 result에 push
    let result =[];
    let maxFavCount=0;
    for(let i=0;i<N;i++){
        for(let j=0;j<N;j++){
            if(classMap[i][j]===0){
                let favCount=0;
                for(let k=0;k<4;k++){
                    if(check(N,i+dx[k],j+dy[k])){
                        if(favStu.indexOf(classMap[i+dx[k]][j+dy[k]])>=0){
                            favCount++;
                        }
                    }
                }
                if(maxFavCount<favCount){
                    maxFavCount=favCount;
                    result=[];
                    result.push([i,j]);
                }else if(maxFavCount===favCount){
                    result.push([i,j]);
                }
            }
        }
    }
    return result;

}

function f2(N,classMap,favArr){//1을 만족하는 칸이 여러 개이면, 인접한 칸 중에서 비어있는 칸이 가장 많은 칸으로 자리를 정한다.
                                //여러개면 result에 여러개 push
    let result =[];
    let maxFavCount=0;
    favArr.forEach((e)=>{
        const [x,y]=e;
        let count=0;
        for(let i=0;i<4;i++){
            const nx = x+dx[i];
            const ny = y+dy[i];
            if(check(N,nx,ny)){
                if(classMap[nx][ny]===0)count++;
            }
        }
        if(maxFavCount<count){
            result=[];
            result.push([x,y]);
            maxFavCount=count;
        }else if(maxFavCount===count){
            result.push([x,y]);
        }

    })
    return result;

}

function f3(f2Arr,classMap,stuNum){//2를 만족하는 칸도 여러 개인 경우에는 행의 번호가 가장 작은 칸으로, 그러한 칸도 여러 개이면 열의 번호가 가장 작은 칸으로 자리를 정한다.
    f2Arr.sort((a,b)=>{
        if(a[0]>b[0]) return 1;
        else if(a[0]===b[0]){
            if(a[1]>b[1]) return 1;
            else return -1;
        }else{
            return -1;
        }
    })

    const [x,y] =f2Arr[0];
    classMap[x][y]=stuNum;
}

function solution(N,classMap,input){
    let result=0;
    input.forEach((e)=>{
        const [stuNum,...favStu] =e;
        const f1Arr = f1(favStu,classMap,N);
        if(f1Arr.length>1){
            const f2Arr = f2(N,classMap,f1Arr);
            if(f2Arr.length>1){
                f3(f2Arr,classMap,stuNum);
            }else{
                const [x,y]=f2Arr[0];
                classMap[x][y]=stuNum;
            }
        }else{
            const [x,y]=f1Arr[0];
            classMap[x][y] = stuNum;
        }
    })
    input.forEach((e)=>{
        const [stuNum,...favStu] =e;
        let count=0;
        for(let i=0;i<N;i++){
            for(let j=0;j<N;j++){
                if(classMap[i][j]===stuNum){
                    for(let k=0;k<4;k++){
                        const nx=i+dx[k];
                        const ny=j+dy[k];
                        if(check(N,nx,ny)){
                            if(favStu.indexOf(classMap[nx][ny])>=0){
                                count++;
                            }
                        }
                    }
                }
            }
        }
        switch(count){ //점수 계산
            case 0:
                result+=0;
                break;
            case 1:
                result+=1;
                break;
            case 2:
                result+=10;
                break;
            case 3:
                result+=100;
                break;
            case 4:
                result+=1000;
                break;
            default:
                break;
        }
    });
    console.log(result);
}
solution(N,classMap,input);
