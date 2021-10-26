const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/코테협업js/JS-ThinkStack/sungmin/2주차/boj11866/input.txt', "utf8");
//const filePath = require("fs").readFileSync('/dev/stdin', "utf8");
let input = filePath.trim().split("\n");
input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));

const [N,K] = input[0].split(" ").map((e)=>+e)

const log=[];
const queue = Array.from({length:N},(v,i)=>i+1);
while(queue.length>0){
    for(let i=0;i<K-1;i++){
        const num = queue.shift();
        queue.push(num);
    }
    const num = queue.shift();
    log.push(num);
}

console.log(`<${log.join(",")}>`)