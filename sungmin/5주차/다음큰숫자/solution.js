function solution(n){
    let oneCount=n.toString(2).split('').map(e=>+e).filter(e=>e===1).length;
    while(1){
        ++n;
        let count=n.toString(2).split('').map(e=>+e).filter(e=>e===1).length;
        if(count===oneCount){
            return n;
        }
    }
}

console.log(solution(78));