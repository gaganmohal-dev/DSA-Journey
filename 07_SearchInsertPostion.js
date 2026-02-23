
    function LowerBound(nums,target){
        let mid = 0;
        let low = 0;
        let high = nums.length - 1;
        let ans = nums.length    

        while(low <= high){
            mid = Math.floor((low + high)/2)

            if(nums[mid] >= target){
                ans = mid;
                high = mid - 1;
            }else{
                low = mid + 1;
            }
        }
        return ans
    }
   


let nums = [1,2,2,2,2,3,3,4,6,7]
let target = 10
let ans = LowerBound(nums,target)


if(ans < nums.length && nums[ans]=== target){
    console.log(`The value is present at index ${ans}`);
    
}else{
    console.log(`THE value not found but should be at index ${ans}`);
    
}
