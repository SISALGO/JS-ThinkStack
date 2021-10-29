const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/코테협업js/JS-ThinkStack/sungmin/2주차/boj17413/input.txt', "utf8");
//const filePath = require("fs").readFileSync('/dev/stdin', "utf8");
let input = filePath.trim().split("\n");
input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));
input = input[0];

function solution(input){
    let result="";
    let word=[];
    for(let i=0;i<input.length; ){
        if(input[i]==="<"){
            while(input[i]!==">"){
                result +=input[i];
                i++;
            }
            result +=input[i];
            i++;
        }else if(input[i]===" "){
            result+=" ";
            i++;
        }else{
            while(input[i]!==' ' && input[i]!=="<" && i<input.length){
                word.push(input[i]);
                i++;
            }
            while(word.length>0){
                result+=word.pop();
            }
        }

    }
    console.log(result);
}

solution(input);