let numbers=[2,7];

function getResult(number){
    let result=number;
    let bin=number.toString(2);
    bin=Array.from({length:50-bin.length},()=>"0").join('')+bin;
    while(1){
        ++result;
        let binResult=result.toString(2);
        binResult=Array.from({length:50-binResult.length},()=>"0").join('')+binResult;
        let count=0;
        for(let i=0;i<50;i++){
            if(bin[i]!==binResult[i]) count++;
        }
        if(count<=2){
            return result;
        }
    }
}

function solution(numbers){
    let result=[];
    numbers.forEach(number=>{
        result.push(getResult(number));
    })
    return result;
}


console.log(solution(numbers));
