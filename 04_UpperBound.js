let nums = [1,2,2,2,3,4,4,7,8]
let low = 0;
let high = nums.length - 1;
let ans  = nums.length;
let mid = 0;
let x = 6;

while(low <= high){
    mid = Math.floor((low + high)/ 2)

    if(nums[mid] > x ){
        ans = mid;
        high = mid - 1;
    }else{
        low = mid + 1;
    }
}

console.log(ans);
