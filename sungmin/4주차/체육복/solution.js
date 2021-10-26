function permutation(arr,selectNum){
    let result=[];
    if(selectNum===1)return arr.map(e=>[e]);
    arr.forEach((ele,idx,arr)=>{
        const fixer = ele;
        const restArr = arr.filter((_,index)=>index!==idx);
        const combinArr = permutation(restArr,selectNum-1);
        const combinFixer = combinArr.map(e=>[fixer,...e]);
        result.push(...combinFixer);
    })
    return result;
}
function solution(n, lost, reserve) {
    let _lost = lost.filter((ele)=>reserve.indexOf(ele)===-1);
    let _reserve = reserve.filter((ele)=>lost.indexOf(ele)===-1);
    let answer = n-_lost.length;
    const selectNum = _lost.length>=_reserve.length?_reserve.length:_lost.length;
    const permuArr = permutation(_reserve,selectNum);
    let count=0;
    permuArr.forEach((ele)=>{
        let cnt=0;
        for(let i=0;i<ele.length;i++){
            if(Math.abs(ele[i]-_lost[i])===1) cnt++;
        }
        count = count<cnt?cnt:count;
    })
    return answer+count;
}

console.log(solution(5, [2,3,4], [1,2,3]));


