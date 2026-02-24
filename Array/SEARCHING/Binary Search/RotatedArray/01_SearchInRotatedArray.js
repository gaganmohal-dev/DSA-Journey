let nums = [9,10,1,5,7]  // Roatated ARRAY FROM [1,5,7,9,10]

let low = 0;
let high = nums.length - 1;
let mid = 0;
let ans = -1;
let target = 5;
let countSteps = 0;

while(low <= high){
     countSteps += 1;
    mid = Math.floor((low + high)/2);
    if(nums[mid]===target){
        ans = mid;
        break;
    }

    if(nums[low] <= nums[mid]){
        if(target >= nums[low] && target < nums[mid]){
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }else{
        if(target > nums[mid] && target <= nums[high]){
            low = mid + 1;
        }else{
            high = mid - 1
        }
    }
}

console.log(`You have found the value at index ${ans} in ${countSteps} steps`);
