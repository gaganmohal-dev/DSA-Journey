let nums = [1,10,5,11,6,8]
let target = 11
let flag = false;

    if(nums.length > 0){
        for(let i=0; i<nums.length; i++){
            if(nums[i] == target ){
                flag = true
                break;
             }
            }
        console.log(`Proof Of Existence of value ${target} in Array is : ` +  flag);
    } 
    else{
    console.log('Provide the content First');
    }

