let arr = [1,0,2,0,3,4,0,0,6,8,10]  // ---> [1,2,3,4,0,0]
let newArr = []
let count = 0

for(let i=0; i<arr.length; i++){  //O(n)
    if(arr[i] !== 0){
        newArr.push(arr[i])
    }else{
        count++ 
    }
}

for(let i=0; i<count; i++){  // O(n)
    newArr.push(0)
}

console.log(newArr);


// O(n+n) -> O(2n)  -> O(n)

// Two Pointer Approach..

let nums = [1,2,3,4,6,1,0,12,15,100]

let j = -1;


for(let i=0; i<nums.length; i++){
    if(nums[i] === 0){
        j = i
        break;
    }
}

if(j == -1){ return console.log("No zeros in array")}

for(let i=j + 1; i<nums.length; i++){
    if(nums[i] !== 0){
       [nums[i], nums[j]] = [nums[j], nums[i]] // is equal to :  temp = nums[j]; nums[j] = nums[i]; nums[i] = temp;
        j++;
    }
}
console.log(nums);
