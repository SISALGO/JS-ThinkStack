
function solution(number){
    let result=0;
    for(let i=1;i<=number;i++){
        let alpha = String(i);
        alpha = alpha.split("");
        if(alpha.indexOf("3")>-1 || alpha.indexOf("6")>-1 || alpha.indexOf("9")>-1) result++;
    }
    console.log(result);
}
solution(13);
solution(33);