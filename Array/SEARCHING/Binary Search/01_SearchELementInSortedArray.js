let nums = [1,2,3,4,5,6,7,8,9]
let target= 1

function BinarySearch(target){
    let mid = 0;
    let start = 0;
    let end = nums.length - 1;
    
    while(start <= end){
        mid = Math.floor((start + end) / 2)

        if(target == nums[mid]){
            return mid;
        }else if(target > nums[mid]){
            start = mid  + 1;
        }else{
            end = mid - 1;
        }

    }
    return -1;
}

let output = BinarySearch(target)
if(output != -1){
    console.log(`You have found the value ${target} at index ${output}th`);
}else{
        console.log(`The  Value ${target} is not Present in array!!`);

}