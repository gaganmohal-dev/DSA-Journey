let nums = [1,1,2,2,3,3,4,4,5]
let low = 0;
let high = nums.length - 1;


while(low < high){
   let mid = Math.floor((low + high) / 2)
    if(mid % 2 !== 0){
        mid = mid - 1;
    }

    if(nums[mid] == nums[mid  + 1]){
        low = mid + 2;
    }else{
        high = mid;
    
    }
}

console.log(`The value is ${nums[low]} at index ${low}`);
