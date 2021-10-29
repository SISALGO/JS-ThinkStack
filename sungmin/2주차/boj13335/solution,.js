const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/코테협업js/JS-ThinkStack/sungmin/2주차/boj13335/input.txt', "utf8");
//const filePath = require("fs").readFileSync('/dev/stdin', "utf8");
let input = filePath.trim().split("\n");
input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));

const [n,w,l] = input[0].split(" ").map(e=>+e);
input.shift();
const carArr = input[0].split(" ").map(e=>+e);


function solution(n,w,l,carArr){
    let result =0;
    let wArr = [[carArr[0],0]];
    let weight = l-carArr[0];
    let i=1;
    while(wArr.length>0 || i<n){
        if(wArr[0][1]>=w) {
            weight+=wArr[0][0];
            wArr.shift();    
        }
        if(i<n){
            if(wArr.length<w && weight>=carArr[i]){
            weight-=carArr[i];
            wArr.push([carArr[i],0]);
            i++;
            }
        }
        wArr.forEach(e=>e[1]++);

        result++;
    }
    console.log(result);
}
solution(n,w,l,carArr)