const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/코테협업js/JS-ThinkStack/sungmin/2주차/boj11866/input.txt', "utf8");
//const filePath = require("fs").readFileSync('/dev/stdin', "utf8");
let input = filePath.trim().split("\n");
input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));

const [N,K] = input[0].split(" ").map((e)=>+e);

function solution(N,K){
    let arr = Array.from({length:N},(v,i)=>i+1);
    let result=[];
    let idx=-1;
    while(arr.length>0){
        if(idx+K>arr.length){
            idx = idx+K;
            while(idx>=arr.length){
                idx=idx-arr.length;
            }
            result.push(arr[idx]);
            arr.splice(idx,1);
            idx=idx-1;

        }else{
            
            result.push(arr[idx+K]);
            arr.splice(idx+K,1);
            idx = idx+K-1;
        }
    }
    let str="";
    result.forEach((e,idx)=> {
        if(idx!==result.length-1){
        str+=e+","
        }else{
            str+=e;
        }
             });
    console.log(`<${str}>`);
}
solution(N,K);