
function check(pobi){
    if(pobi[0]%2===1 && pobi[1]%2===0 && (pobi[1]-pobi[0])===1)return true;
    else return false;
}
function getMax(pobi){
    let result=0;
    pobi.forEach(ele => {
        if(ele>=100){
            let num1 = ele%10;
            let num2 = Math.floor(ele%100/10);
            let num3 = Math.floor(ele/100);
            eleResult = num1+num2+num3>num1*num2*num3?num1+num2+num3:num1*num2*num3;
        }
        else if(ele>=10){
            let num1 = ele%10;
            let num2 = Math.floor(ele/10);
            eleResult = num1+num2>num1*num2?num1+num2:num1*num2;
        }else{
            eleResult=ele;
        }
        result = result<eleResult?eleResult:result;
        
    });
    return result;
}
function solution(pobi,crong){
    let result =0;
    //왼쪽페이지가 홀수 오른쪽 페이지가 짝수 인 경우
    if(check(pobi) && check(crong)){
        let pobiRes = getMax(pobi);
        let crongRes = getMax(crong);
        if(pobiRes===crongRes){
            result=0;
        }else if(pobiRes>crongRes){
            result=1;
        }else{
            result=2;
        }
    }else{
        result=-1;
    }
    console.log(result);
}
solution([97,98],[197,198]);
solution([131,132],[211,212]);
solution([99,102],[211,212]);
