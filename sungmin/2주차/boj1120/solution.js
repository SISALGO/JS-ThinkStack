const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/코테협업js/JS-ThinkStack/sungmin/2주차/boj1120/input.txt', "utf8");
//const filePath = require("fs").readFileSync('/dev/stdin', "utf8");
let input = filePath.trim().split("\n");
input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));

let [a,b]=input[0].split(" ");
a=a.split("");
b=b.split("");
function solution(a,b){
    let result=100;
    for(let i=0;i<=b.length-a.length;i++){
        let count=0;
        for(let j=0;j<a.length;j++){
            if(a[j]!==b[i+j]) count++;
        }
        result = result>count?count:result;
    }
    console.log(result);
}
solution(a,b)