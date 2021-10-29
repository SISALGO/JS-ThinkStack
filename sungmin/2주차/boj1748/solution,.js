const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/코테협업js/JS-ThinkStack/sungmin/2주차/boj1748/input.txt', "utf8");
//const filePath = require("fs").readFileSync('/dev/stdin', "utf8");
let input = filePath.trim().split("\n");
input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));

input = +input[0];

function solution(input){
    let result =0;
    for(let i=1;i<(input);i*=10){
        result +=input-i+1;
    }
    console.log(result);
}
solution(input);