function SearchingElement(nums, target){
    function LowerBound(nums, target){
        let low = 0;
        let high = nums.length - 1;
        let mid = 0
        let ans = nums.length;

        while(low <= high){
            mid = Math.floor((low + high) / 2)

            if(nums[mid] >= target){
                ans = mid
                high = mid - 1;
            }else{
                low = mid + 1;
            }
        }
        return ans
    }
    function UpperBound(nums, target){
        let low = 0;
        let high = nums.length - 1;
        let mid = 0
        let ans = nums.length;

        while(low <= high){
            mid = Math.floor((low + high) / 2)

            if(nums[mid] > target){
                ans = mid
                high = mid - 1;
            }else{
                low = mid + 1;
            }
        }
        return ans
    }

    let lb = LowerBound(nums, target) 
    let ub = UpperBound(nums, target)
    
    if(lb === nums.length || nums[lb] !== target){
        return 0;
    }
    let count = ub - lb;
    return count

}



let nums = [1,2,2,2,3,3,5,5,8,8,8,8,8,8,8,9]
let target = 0
let output = SearchingElement(nums, target)
console.log(output);
