let nums = [4,5,1,2,3]
let low = 0;
let high = nums.length - 1;
let mid = 0;

while(low < high){
    mid = Math.floor((low + high) / 2)
    
    if(nums[mid] > nums[high]){
        low = mid + 1;
    }else{
        high = mid;
    }
}

console.log(`THe number of rotation taken is : ${low} `);

