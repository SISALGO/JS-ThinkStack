//const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/코테협업js/JS-ThinkStack/sungmin/2주차/boj1966/input.txt', "utf8");
const filePath = require("fs").readFileSync('/dev/stdin', "utf8");
let input = filePath.trim().split("\n");
input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));

const TC = +input[0];
input.shift();

class Queue{
    constructor(){
        this.array=[];
    }
    enqueue(item){
        this.array.push(item);
    }
    dequeue(){
        return this.array.shift();
    }
    front(){
        return this.array[0];
    }
    length(){
        return this.array.length;
    }
}

function solution(TC,input){
    let answerList =[];
    for(let i=0;i<TC;i++){
        let answer=0;
        let flag = 1
        const q = new Queue();
        const [N,M] = input[i*2+0].split(' ').map((e)=>+e);
        q.array = input[i*2+1].split(' ').map((e,idx)=>[+e,idx]);
        while(flag){
            const front = q.front();
            for(let k=0;k<q.length();k++){
                if(q.array[k][0]>front[0]){
                    q.dequeue();
                    q.enqueue(front);
                    break;
                }
                if(k===q.length()-1){
                    let printData=q.dequeue();
                    if(printData[1]===M){
                        flag=0;
                        answerList.push(answer+1);
                    
                    }else answer++;
                    
                    break;
                }
            }

        }
        
    }
    answerList.map((ele)=>console.log(ele));

}

solution(TC,input);