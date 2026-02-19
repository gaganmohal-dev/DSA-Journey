let nums = [35,1,2,35, 7,35,9,10,35,35,35]
let counter = 0;
let target = 35

if(nums.length > 0){
    for(let i=0; i<nums.length; i++){
        if(target == nums[i]){
            counter++
        }
    }
    console.log(`The number of duplicates of ${target}`, counter);
    
}else{
    console.log('Provide the Content!!');
    
}