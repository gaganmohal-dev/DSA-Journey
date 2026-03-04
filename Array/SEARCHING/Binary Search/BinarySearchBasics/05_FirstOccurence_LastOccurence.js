
function SearchELement(nums, target){
    function FirstOccurence(nums , target){
        let low = 0;
        let high = nums.length - 1
        let mid = 0;
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
        return ans;
    }

    function LastOccurence(nums, target){
        let low = 0;
        let high = nums.length - 1;
        let mid = 0;
        let ans = nums.length;

        while(low <= high){
            mid = Math.floor((low + high)/2);

            if(nums[mid] > target){
                ans = mid ;
                high = mid - 1;
            }else{
                low = mid + 1;
            }
        }  
        return ans;
    }

  
   let Lb = FirstOccurence(nums, target)
   let Ub = LastOccurence(nums, target)

   if(nums[Lb]!== target || Lb === nums.length){
    return [-1,-1]
   }

   return [Lb, Ub-1]
}

let nums = [5,7,7,8,8,10]
let target = 8
let output = SearchELement(nums, target);
console.log(output);
