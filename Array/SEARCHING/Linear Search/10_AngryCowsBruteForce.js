function canPlace(stalls, k , dist){
    let cows = 1
    let prevPlace = stalls[0]
    
    for(let i=1; i<stalls.length; i++){
        if((stalls[i] - prevPlace) >= dist){
            cows++;
            prevPlace = stalls[i];
        }

        if(cows >= k){
            return true
        }
    }
    return false
}

function angryCowsBrute(stalls, k){
    
    stalls.sort((a,b) => a - b)
    
    let maxDist = stalls[stalls.length - 1] - stalls[0]; // 8
    let answer = 0

    for(let dist=1; dist<= maxDist; dist++){
        if(canPlace(stalls, k, dist)){
            answer = dist
        }
    }
    return answer
}


let stalls = [1,2,4,8,9]
let k = 3
let result = angryCowsBrute(stalls,k)

console.log(result);


