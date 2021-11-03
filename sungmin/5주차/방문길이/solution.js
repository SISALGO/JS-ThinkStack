let dirs="LULLLLLLU";

function checkRange(x,y){
    if(x>=0 && x<11 && y>=0 && y<11) return true;
    else return false;
}

function gotoPosition(x,y,target){
    let nx;
    let ny;
    switch(target){
        case "U":
            nx=x-1,ny=y;
            break;
        case "D":
            nx=x+1,ny=y;
            break;
        case "L":
            nx=x;ny=y-1;
            break;
        case "R":
            nx=x;ny=y+1;
            break;
    }
    return [nx,ny];

}

function solution(dirs) {
    let answer = 0;
    let [x,y]=[5,5];
    let map=Array.from({length:11},()=>Array.from({length:11},()=>[]));
    for(let i=0;i<dirs.length;i++){
        let [nx,ny]=gotoPosition(x,y,dirs[i]);
        if(checkRange(nx,ny)){
            let dir2;
            if(dirs[i]==="U" || dirs[i]==="D"){
                dir2=dirs[i]==="U"?"D":"U";
            }
            if(dirs[i]==="L" || dirs[i]==="R"){
                dir2=dirs[i]==="L"?"R":"L";
            }
            if(map[nx][ny].length===0){
                map[nx][ny].push(dirs[i]);
                map[x][y].push(dir2);
                answer++;
            }else{
                if(map[nx][ny].indexOf(dirs[i])===-1){
                    map[nx][ny].push(dirs[i]);
                    map[x][y].push(dir2);
                    answer++;
                }
            }
            x=nx;
            y=ny;
        }
    }
    return answer;
}

console.log(solution(dirs));