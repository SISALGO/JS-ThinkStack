const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/코테협업js/JS-ThinkStack/sungmin/4주차/boj2960/input.txt', "utf8");
//const filePath = require("fs").readFileSync('/dev/stdin', "utf8");
let input = filePath.trim().split("\n");
input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));
const [N,K] = input[0].split(" ").map(e=>+e);

function solution(N,K){
    let arr = new Set();
    let count =0;
    for(let i=2;i<=N;i++) arr.add(i);
    while(1){
        const min=Math.min(...arr);
        let i=1;
        while(min*i<=Math.max(...arr)){
            if(arr.has(min*i)){
                count++;
                arr.delete(min*i);
                if(count===K){
                    console.log(min*i);
                    return;
                }
                i++;
            }else{
                i++;
            }
        }
    }
    
}
solution(N,K);