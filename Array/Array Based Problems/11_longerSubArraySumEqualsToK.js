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


// Optimal Approach: Using Sliding Window (only works for Positives)

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


// Optimal Approach: Hashmap (For both positives and Negatives)

function longerSubArraySumHashing(arr,k){
    let maxlen = 0;
    let sum = 0;
    let map = new Map();

    for(let i=0; i<arr.length; i++){
        sum = sum + arr[i];

        if(sum == k){
            maxlen = i + 1;
        }

        if(map.has(sum - k)){
            let len = i - map.get(sum - k)
            maxlen = Math.max(maxlen, len);
        }

        if(!map.has(sum)){
            map.set(sum, i)
        }
    }

    return maxlen;
}

let arr3 = [2,-2,2,-2,2]
let k3 = 0
let result3 = longerSubArraySumHashing(arr3, k3);
console.log(result3);


