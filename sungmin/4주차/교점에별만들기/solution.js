let line = [[2, -1, 4], [-2, -1, 4], [0, -1, 1], [5, -8, -12], [5, 8, 12]];


function getCrossing(line){
    let crossing=[];
    line.forEach((equation,index,line) => {
        const [a,b,e]=equation;
        const restLine = line.slice(index+1);
        restLine.forEach(equation=>{
            const [c,d,f]=equation;
            if((a*d-b*c)!==0){
                const x = (b*f-e*d)/(a*d-b*c);
                const y = (e*c-a*f)/(a*d-b*c);
                if(Number.isInteger(x) && Number.isInteger(y)){
                    crossing.push([x,y]);
                }
            }
        })
        
    });
    return crossing;
}

function solution(line){
    let crossing=[];
    let result=[];
    crossing = getCrossing(line);
    let row = crossing.map(ele=>ele[0]);
    let column = crossing.map(ele=>ele[1]);
    let rowMin =Math.min(...row);
    let rowMax = Math.max(...row);
    let colMin = Math.min(...column);
    let colMax = Math.max(...column);
    for(let i=colMin;i<=colMax;i++){
        let str="";
        for(let j=rowMin;j<=rowMax;j++){
            if(crossing.has([j,i])){
                str +="*";
            }else str+=".";
        }
        result.push(str);
    }

    console.log(result);
}

let a=new Set();
a.add([1,2]);
console.log(a.has([1,2]));