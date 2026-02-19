let nums = [1,10,23,12,11,7,9]
let target = 14
let index = -1

if(nums.length > 0){
    for(let i=0; i<nums.length; i++){
        if(nums[i] == target){
            index = i;
            break;
        }
    }
   console.log(index);
    
}else{
    console.log('Provide the content first!!');
    
}