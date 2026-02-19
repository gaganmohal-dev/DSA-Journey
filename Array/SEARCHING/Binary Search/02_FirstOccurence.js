let nums = [1,2,2,2,3,3,3,3,4,5,6,7]
let target = 3
let mid = 0;
let start = 0;
let end = nums.length - 1
let FirstOccurence = -1;
let LastOccurence = -1;

    while(start <= end){
        mid = Math.floor((start + end)/2);

        if(target == nums[mid]){
            end = mid - 1;
            FirstOccurence = mid;
        }else if(target > nums[mid]){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }

console.log(FirstOccurence);

