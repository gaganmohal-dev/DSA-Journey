let nums = [1,2,4,4,4,5,6,7,9]
let low = 0;
let high = nums.length - 1;
let ans = nums.length;
let mid = 0;
let x = 10;

while(low <= high){
    mid = Math.floor((low + high) / 2)
    if(nums[mid] >= x){
        ans = mid;
        high = mid - 1;
    }else{
        low = mid + 1;
    } 
}

console.log(ans);
