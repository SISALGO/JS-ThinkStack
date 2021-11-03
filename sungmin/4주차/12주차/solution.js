function permutation(arr,selectNum){
    let result=[];
    if(selectNum===1)return arr.map(ele=>[ele]);
    arr.forEach((ele,index,arr)=>{
        const fixer = ele;
        const restArr = arr.filter((_,idx)=>idx!==index);
        const combinArr = permutation(restArr,selectNum-1);
        const combinFixer = combinArr.map(ele=>[fixer,...ele]);
        result.push(...combinFixer);
    })
    return result;
}
function solution(k, dungeons) {
    let answer = 0;
    let permutationArr = permutation(dungeons,3);
    permutationArr.forEach(dungeonEle=>{
        let fatigue =k;
        let count = 0;
        dungeonEle.forEach(dungeon=>{     
            const [leastValue,costValue] = dungeon;
            if(fatigue>=leastValue && fatigue>=costValue){
                fatigue -=costValue;
                count++;
            }
        })
        answer = answer<count?count:answer;
    })
    return answer;
}

console.log(solution(80, [[80,20],[50,40],[30,10]]));