// Reverse Method to get the last occurence
let nums = [1,2,5, 9, 10 ,5,10, 5,5,8,5]
let target = 10;
let index = -1
for(let i=nums.length-1; i>0; i--){
    if(nums[i] == target){
        index = i
        break
    }
}
console.log(index);

//Straight Method

// let nums = [1,2,5, 9, 10 ,5,10, 5,5,8,5]
let target2 = 5
let index2 = -1

if(nums.length > 0){
    for(let i=0; i<nums.length; i++){
        if(target2 == nums[i]){
            index2 = i 
        }
    }
    console.log(index2);
    
}else{
    console.log('Provide the content!!');
    
}