// Brute Force Approach

// [10,5,2,8,1,9]  

function longerSubArraySumBrute(arr, k){
    let maxlen = 0;

    for(let i=0; i<arr.length; i++){   //i
        let sum = 0;

        for(let j=i; j<arr.length; j++){
            sum = sum + arr[j]     //jth , 

            if(sum === k){
                 maxlen = Math.max(maxlen, j - i + 1);   
            }
        }
    }
    return maxlen
}

let arr = [10,5,2,8,1,9]
let k = 15
let result =  longerSubArraySumBrute(arr, k)
console.log(result);


// Optimal Approach: Using Sliding Window

function longerSubArraySumOptimal(nums, k){
    let left = 0;
    let maxlen = 0; 
    let sum = 0
    for(let right=0; right<nums.length; right++){
        sum = sum + nums[right]

        while(sum > k){
            sum = sum - nums[left]
            left++
        }

        if(sum === k){
            maxlen = Math.max(maxlen, right-left+1);
        }
    }
    return maxlen

}

let nums = [10,5,2,7,1,9]
let k2 = 15
let result2 = longerSubArraySumOptimal(nums, k2)
console.log(result2);
