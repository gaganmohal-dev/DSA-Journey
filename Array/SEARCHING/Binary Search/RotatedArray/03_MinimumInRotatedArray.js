let nums = [6,7,0,1,2,3,4,5]
let low = 0;
let high = nums.length - 1;


while(low < high){
    mid = Math.floor((low + high) / 2);
    if(nums[mid] > nums[high]){
        low = mid + 1;
    }else{
        high = mid ;
    }
}
console.log(nums[low]);
