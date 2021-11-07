let n=6;
let wires = [[1, 4], [6, 3], [2, 5], [5, 1], [5, 3]];

function find_parent(parent,x){
    if(parent[x]!==x){
        parent[x]=find_parent(parent,parent[x]);
    }
    return parent[x];
}

function union_parent(parent,a,b){
    let a_parent = find_parent(parent,a);
    let b_parent = find_parent(parent,b);
    if(a_parent<b_parent){
        parent[b]=a_parent;
    }
    else{
        parent[a]=b_parent;
    }
}
function solution(n,wires){
    let answer =Number.MAX_SAFE_INTEGER;
    wires.forEach((wire,idx,wires)=>{
        let restArr = wires.filter((_,index)=>index!==idx);
        let parent = Array.from({length:n+1},(_,i)=>+(i));
        restArr.forEach((ele)=>{
            const [a,b]=ele;
            union_parent(parent,a,b);
        });
        restArr.forEach((ele)=>{
            const [a,b]=ele;
            union_parent(parent,a,b);
        });

        let parentNodeCount = Array.from({length:n+1},()=>0);
        for(let i=1;i<=n;i++){
            let parentNode = find_parent(parent,i);
            parentNodeCount[parentNode]++;
        }
        parentNodeCount.sort((a,b)=>b-a);
        let gap=parentNodeCount[0]-parentNodeCount[1];
        answer=answer>gap?gap:answer;
    })
    console.log(answer);

}
solution(n,wires)