function solution(s) {
    let remove0=0;
    let count=0;
    while(s!=="1"){
        let len=s.length;
        s=s.split('').filter(e=>e==="1");
        remove0+=len-s.length;
        s=s.length.toString(2);
        count++;
    }
    
    return [count,remove0];
}

console.log(solution("110010101001"))