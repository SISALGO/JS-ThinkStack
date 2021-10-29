function solution(citations) {
    var answer = 0;
    let max_h=Math.max(...citations);
    citations.sort((a,b)=>b-a);
    for(let i=max_h;i>0;i--){
        let quotation_count = 0;
        citations.forEach(citation=>{
            if(citation>=i) quotation_count++;
        })
        if(quotation_count>=i && citations.length-quotation_count<quotation_count){
            answer=i;
            return answer;
        }
    }
    return answer;
}
solution([3, 0, 6, 1, 5])