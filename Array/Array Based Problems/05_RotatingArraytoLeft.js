
// O(n) Time complexity and This is Optimal Approach, specifically in brute force you can increase the Space complexity by taking more variables or duplicate array itself but in Time complexity would be same

// Rotating Array to left by 1 element
let arr = [1,2,3,4,5]
temp = arr[0]

for(let i=0; i<arr.length; i++){
    arr[i] = arr[i + 1]
}
arr[arr.length - 1] = temp
// console.log(arr);

// Rotating Array to left by k elements

function RotatingArr(nums,k,direction){
    
    if(direction == "left"){
        let tempK = k
        let newArr = []

        for(let i=0; i<nums.length; i++){
            if(k > 0){
                newArr.push(nums[i])   // [1]
                k--;
            }
            nums[i] =  nums[i + tempK]  // [3]
            
            //1
        }
        nums.push(...newArr)    
        
        console.log(nums);
        
        
    }
    
}
let nums = [1,2,3,4,5,6]
let k = 2
let direction = "left"
let result = RotatingArr(nums, k, direction)

