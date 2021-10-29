//const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/코테협업js/JS-ThinkStack/sungmin/2주차/boj18111/input.txt', "utf8");
const filePath = require("fs").readFileSync('/dev/stdin', "utf8");
let input = filePath.trim().split("\n");
input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));
const [N,M,B] = input[0].split(" ").map((e)=>+e);
input.shift();
input = input.map((e)=>e.split(" ").map(e=>+e));

function solution(N,M,B,input){
    let flag =1;
    let reTime =9999999999999;
    let reHeight =0; 
    for(let i=0;i<=256;i++){
        if(flag===0) break;
        let block =B;
        let time=0;
        for(let j=0;j<N;j++){
            for(let k=0;k<M;k++){
                if(input[j][k]>i){
                    block +=input[j][k]-i;
                    time += (input[j][k]-i)*2;
                }else if(input[j][k]<i){
                        block -=(i-input[j][k]);
                        time +=(i-input[j][k]);
                }
            }
        }
        if(block<0) flag =0;
        else{
            if(reTime>time){
                reTime =time;
                reHeight = i;
            }else if(reTime===time){
                reHeight=reHeight>i?reHeight:i;
            }
        }
        
    }
    console.log(reTime,reHeight);

}

solution(N,M,B,input);



