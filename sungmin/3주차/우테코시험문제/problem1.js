let money = 15000;
function solution(money){
    const paper =[50000,10000,5000,1000,500,100,50,10,1];
    let result=[];
    for(let i=0;i<paper.length;i++){
        if(Math.floor(money/paper[i])>0){
            result.push(Math.floor(money/paper[i]));
            money -=Math.floor(money/paper[i])*paper[i];
        }else{
            result.push(0);
        }
    }
    console.log(result);

}
solution(money)