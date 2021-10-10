const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/코테협업js/JS-ThinkStack/sungmin/2주차/boj5567/input.txt', "utf8");
//const filePath = require("fs").readFileSync('/dev/stdin', "utf8");
let input = filePath.trim().split("\n");
input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));

const n = +input[0];
const m = +input[1];
input.shift();
input.shift();

input = input.map((e)=>e.split(" ").map((e)=>+e));

class Queue{
    constructor(){
        this.array = [];
    }
    enqueue(data){
        this.array.push(data);
    }
    dequeue(){
        return this.array.shift();
    }
    length(){
        return this.array.length;
    }
}

function solution(input,n,m){
    let visited = Array.from({length:n},()=>0);

    let q =new Queue();
    input.forEach(ele => {
        const [a,b] =ele;
        if(a===1) q.enqueue(b),visited[b-1]=1;
        else if(b===1) q.enqueue(a),visited[a-1]=1;
    });
    while(q.length()!==0){
        const fixer = q.dequeue();
        input.forEach(ele => {
            if(ele.indexOf(1)<0){
            const [a,b] =ele;
            if(a===fixer) visited[b-1]=1;
            else if(b===fixer) visited[a-1]=1;
        }
        });
    }
   let result = visited.filter(ele=>ele===1).length;
   console.log(result);
}
solution(input,n,m)