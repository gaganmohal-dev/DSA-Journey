function longerSubArraySumBrute(nums, k){
   let maxlen = 0
    for(let i=0; i<nums.length; i++){
       let sum = 0 
        for(let j=i; j<nums.length; j++){
            sum = sum + nums[j]
            
            if(sum === k){
                maxlen = Math.max(maxlen, j - i + 1);
            }
        }

    }


    return maxlen;
}

let arr = [9,-3,3,-1,6,-5]
let k = 0
let result =  longerSubArraySumBrute(arr,k)
console.log(result);

