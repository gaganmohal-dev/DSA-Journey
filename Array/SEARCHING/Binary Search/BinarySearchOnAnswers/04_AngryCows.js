function canPlace(stalls, k , midDist){
    let cows = 1;
    let prevPlace = stalls[0]

    for(let i =1; i<stalls.length; i++){
        if((stalls[i] - prevPlace) >= midDist){
            cows++
            prevPlace = stalls[i];
        }

        if(cows >= k){
            return true;
        }
    }
    return false;

}

function angryCows(stalls, k){
    stalls.sort((a,b) => a - b);
    let low = 1;
    let high = stalls[stalls.length - 1] - stalls[0]
    let answer = 0

    while(low <= high){

            let mid = Math.floor((low + high)/2)

            if(canPlace(stalls,k,mid)){
                low = mid + 1;
                answer = mid;
            }else{
                high = mid - 1;
            }
    }
    return answer
}

let stalls = [1,2,4,8,9]
let k = 3;
let result = angryCows(stalls, k)
console.log(result);
