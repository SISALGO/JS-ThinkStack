//const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/코테협업js/JS-ThinkStack/sungmin/2주차/boj15686/input.txt', "utf8");
const filePath = require("fs").readFileSync('/dev/stdin', "utf8");
let input = filePath.trim().split("\n");
input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));

const [N,M] = input[0].split(" ").map((e)=>+e);
input.shift();
input = input.map((e)=>e.split(" ").map(ele=>+ele));

function combination(arr,selectNum){
    let result =[];
    if(selectNum===1) return arr.map((ele)=>[ele]);
    arr.forEach((ele,index,arr)=>{
        const fixer = ele;
        const restArr = arr.slice(index+1);
        const combinationArr = combination(restArr,selectNum-1);
        const combinFixer = combinationArr.map((ele)=>[fixer,...ele]);
        result.push(...combinFixer); 
    });
    return result;
}  

function getDistance(homePos,combiChikenEle){
    let result=0;
    homePos.forEach((pos)=>{
        const [hx,hy] = pos;
        let lessDis =10000;
        combiChikenEle.forEach((pos)=>{
            const [cx,cy] = pos;
            let distance = Math.abs(hx-cx)+Math.abs(hy-cy);
            lessDis = lessDis>distance?distance:lessDis;
        })
        result+=lessDis;
    })
    return result;
}

function solution(input,N,M){
    let homePos =[];
    let chikenPos =[];
    input.forEach((ele,idx) => {
        ele.forEach((item,index)=>{
            if(item===2) chikenPos.push([idx+1,index+1]);
            else if(item===1) homePos.push([idx+1,index+1]);
        })
    });
    const combiChiken = combination(chikenPos,M);
    let result=10000;
    combiChiken.forEach((ele)=>{
        let getDis=getDistance(homePos,ele);
        result = result>getDis?getDis:result;
    })
    console.log(result);
}

solution(input,N,M)