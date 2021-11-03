function solution(s) {
    let answer = '';
    s=s.split(' ').map(e=>+e);
    let min=Math.min(...s);
    let max=Math.max(...s);
    answer=min+' '+max;
    return answer;
}