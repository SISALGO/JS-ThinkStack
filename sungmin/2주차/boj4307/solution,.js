const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/코테협업js/JS-ThinkStack/sungmin/2주차/boj4307/input.txt', "utf8");
//const filePath = require("fs").readFileSync('/dev/stdin', "utf8");
let input = filePath.trim().split("\n");
input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));

let TC = +input[0];
let testCase = [];
input.shift();
let testarr=[];
input.forEach((e)=>{
})

function combination(arr,selectNum){
    let result=[];
    if(selectNum===1) return arr.map(e=>[e]);
    arr.forEach((ele,idx,arr)=>{
        let fixer = ele;
        let restArr = arr;
        let combinaArr = combination(restArr,selectNum-1);
        let fixerArr = combinaArr.map((e)=>[fixer,...e]);
        result.push(...fixerArr);
    })
    return result;
}

function solution(l,n,input){
    let combiArr = combination([0,1],n);
    
}
