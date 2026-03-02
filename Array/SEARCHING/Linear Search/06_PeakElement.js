let nums = [1,2,3,4,5,6,7,8,9,11]
let ans = -1;
let n = nums.length

if(n == 0){
    console.log(0)
}else if(nums[0] > nums[1]){
    console.log(0);
}else if(nums[n-1] > nums[n - 2]){
    console.log(n-1);
}else{
    for(let i=0; i< nums.length - 1; i++){
        if(nums[i] > nums[i - 1] && nums[i] > nums[i + 1]){
            ans = i;
            break;
        }
    }
    console.log(ans);
}


