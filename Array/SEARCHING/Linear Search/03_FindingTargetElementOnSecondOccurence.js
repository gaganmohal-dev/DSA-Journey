let nums = [1,2,5,10,4,10,8,9, 10]
let counter = 0;
let index = -1;
let target = 10;

if(nums.length > 0){
    for(let i=0; i<nums.length; i++){
        if(nums[i] == target){
            counter += 1
            if(counter == 2){
                index = i;
                break;
            }
        }
    }
    if(index != -1){
    console.log(`The second value of the Target is at index : ${index}`);
    }
}else{
    console.log('Provide the conetent first!!');
    
}
