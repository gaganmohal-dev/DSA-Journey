function SearchFloorCiel(nums,target){
    function Floor(nums,target){
        let mid = 0;
        let low = 0;
        let high = nums.length - 1;
        let ans = -1;
        
        while(low <= high){
            mid = Math.floor((low + high)/2)

            if(nums[mid] <= target){
                ans = mid;
                low = mid + 1;
            }else{
                high = mid - 1;
            }
        }
       return ans; 
    }
    function Ciel(nums,target){
        let mid = 0;
        let low = 0;
        let high = nums.length - 1;
        let ans = -1;
        
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

    let floor = Floor(nums,target)
    let ciel = Ciel(nums,target)

   
        
   return [
    floor === -1 ? -1 : nums[floor],
    ciel === -1 ? -1: nums[ciel]
   ];
    
}

let nums = [1,2,2,3,3,4,6]
let target = 5
let output = SearchFloorCiel(nums,target)

console.log(output);

