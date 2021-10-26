function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let count = truck_weights.length;
    let passed_truck =[];
    let bridge_truck=[];
    while(passed_truck.length<count){
        for(let i=0;i<bridge_truck.length;i++){
            bridge_truck[i][1]+=1;
        }
        if(bridge_truck.length>0){
        if(bridge_truck[0][1]>bridge_length) {
            weight+=bridge_truck[0][0];
            passed_truck.push(bridge_truck[0][0]);
            bridge_truck.shift();

        }
        }
        for(let i=0;i<truck_weights.length;i++){
            if(weight>=truck_weights[i] && bridge_truck.length<bridge_length){
                weight-=truck_weights[i];
                bridge_truck.push([truck_weights[i],1]);
                truck_weights.shift();
            }else break;
        }
        answer++;
    }
    return answer;
}

console.log(solution(2, 10, [7,4,5,6]));