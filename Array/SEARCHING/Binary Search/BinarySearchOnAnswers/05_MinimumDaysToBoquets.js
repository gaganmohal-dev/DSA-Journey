function canIpluck(numOfDays,m,k, day){
    let noOfBoquets = 0
    let flowers = 0;

    for(let i=0; i < numOfDays.length; i++ ){
       
        if(numOfDays[i] <= day){
            flowers++

            if(flowers == k){
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

     if(numOfDays.length < m*k){
            return -1;
        }

    let low = Math.min(...numOfDays)
    let high = Math.max(...numOfDays)
    let ans = -1
   while(low<=high){
    let mid = Math.floor((low + high)/2)
        if(canIpluck(numOfDays,m,k,mid)){
          high = mid -1
          ans = mid
        }else{
           low = mid + 1; 
        }
    }
    return ans;
}

let numOfDays = [7,7,7,7,13,11,12,7]
let m = 3;
let k = 3;
let result = MinimumDays(numOfDays, m, k)
console.log(result);
