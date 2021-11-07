let n = 118372;

let answer=n.toString().split('').sort((a,b)=>b-a).map(e=>+e).join('');

console.log(+answer);