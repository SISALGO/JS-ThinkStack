const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/코테협업js/JS-ThinkStack/sungmin/3주차/boj1051/input.txt', "utf8");
//const filePath = require("fs").readFileSync('/dev/stdin', "utf8");
let input = filePath.trim().split("\n");
input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));

const [N,M] = input[0].split(" ").map((e)=>+e);
input.shift();
input=input.map(e=>e.split("").map(e=>+e));
function solution(N,M,input){
    let square=N>M?M:N;
    let result=1;
    for(let i=square;i>=1;i--){
        for(let j=0;j<=N-i;j++){
            for(let k=0;k<=M-i;k++){
                const num = input[j][k];
                if(input[j+i-1][k]===num && input[j+i-1][k+i-1]===num && input[j][k+i-1]===num){
                    result = i*i;
                    console.log(result);
                    return;
                }
            }
        }
    }
}
solution(N,M,input);