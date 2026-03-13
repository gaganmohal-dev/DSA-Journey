function canIpluck(numOfDays,m,k, day){
    let noOfBoquets = 0
    let flowers = 0;

    for(let i=0; i < numOfDays.length; i++ ){
        if(numOfDays[i] <= day){
            flowers++

            if(flowers >= k){
                noOfBoquets++
                flowers = 0;
            }
        }else{
            flowers = 0
        }
       

        if(noOfBoquets >= m){
            return true;
        }
    }
    return false
}

function MinimumDays(numOfDays,m,k){
    let maxDays = Math.max(...numOfDays)
    let minDays = Math.min(...numOfDays)
    for(let day=minDays; day<=maxDays; day++){
        if(canIpluck(numOfDays,m,k,day)){
          return day
        }
    }
    return -1;
}

let numOfDays = [7,7,7,7,13,11,12,7]
let m = 2;
let k = 3;
let result = MinimumDays(numOfDays, m, k)
console.log(result);
