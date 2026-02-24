let nums = [2,2,2,3,4,5,2]
let low = 0;
let high = nums.length -1 ;
let mid = 0;
let ans = -1;
let target = 2;

while(low <= high)
{
    mid = Math.floor((low + high)/2)

    if(nums[mid] === target){
        ans = mid;
        break; 
    }

    if(nums[low] === nums[mid] && nums[mid] === nums[high]){
        low++;
        high--;
    }
    else if(nums[low] <= nums[mid]){
        if(target >= nums[low] && target < nums[mid]){
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }else{
        if(target > nums[mid] && target <= nums[high]){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
}

console.log(ans);
