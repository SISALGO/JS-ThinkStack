let crytogram = "zyelleyz";
function solution(crytogram){
    let flag=1;
    let result=[];
    let arr=crytogram;
    while(flag){
    let k=0;
    result.push(arr[0]);
    for(let i=1;i<arr.length;){
        if(result[result.length-1]===arr[i]){
            while(result[result.length-1]===arr[i]){
                i++;
            }
            result.pop();
            result.push(arr[i]);
            i++;
            k=1;
        }else{
            result.push(arr[i]);
            i++;
        }
    }
    if(!k){
        flag=0;
    }
    arr=result;
    result=[];
    }
    console.log(arr.join(''));
}
solution(crytogram)
