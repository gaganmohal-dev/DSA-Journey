function Searching(nums, target){
    function Floor(nums,target){
        let mid = 0;
        let low = 0;
        let high = nums.length - 1
        let ans = nums.length;

        while(low <= high){
            mid = Math.floor((low + high) / 2)

            if(nums[mid] >= target){
                ans = mid;
                high = mid - 1;
            }else{
                low = mid + 1;
            }
        }
        return ans - 1;
    }
    function Ceil(nums,target){
          let mid = 0;
        let low = 0;
        let high = nums.length - 1
        let ans = nums.length;

        while(low <= high){
            mid = Math.floor((low + high) / 2)

            if(nums[mid] > target){
                ans = mid;
                high = mid - 1;
            }else{
                low = mid + 1;
            }
        }
        return ans ;
    }

    let lb = Floor(nums, target)
    let ub = Ceil(nums, target)

    

}

let nums = [1,2,2,3,4,5,6]
let target = 5
let output = Searching(nums,target)