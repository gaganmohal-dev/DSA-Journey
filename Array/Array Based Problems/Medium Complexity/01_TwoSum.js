

function TwoSum(arr, tar){
    let found = false;
    
    for(let i=0; i<arr.length; i++){
        
        for(let j = i + 1; j<arr.length; j++){
            
            if(arr[i] + arr[j] === target){
                console.log(`${target} exists in array it is true`);  
                found = true
                break;     
            }
        } 
        if(found){
            break;
        }
    }
    
    
}
let arr = [2,6,5,8,11]
let target = 14

// Better Approach using Hashing

function TwoSumUsingHashing(arr, tar){
    let map = new Map();

    for(let i=0; i<arr.length; i++){
        let remaining = tar - arr[i]
        
        if(map.has(remaining)){
            return true
        }

        map.set(arr[i], i)
    }
    return false;
}

let arr2 = [2,6,5,8,11]
let result = TwoSumUsingHashing(arr2, 14)
console.log(result);



    // Optimal Approach: Using Two Pointers


    function TwoSumUsingOptimal(arr, target){
        let left = 0;
        let right = arr.length - 1;

        arr.sort((a, b) => a - b);

        while(left < right){
            if(arr[left] + arr[right] == target){
                return true;
            }else if(arr[left] + arr[right] < target){
                left++
            }else{
                right--
            }

            
        }
        return false
    }

    let arr3 = [2,6,5,8,11]
    let result3 = TwoSumUsingOptimal(arr3, 14);
    console.log(result3);


    // if Returning indexes

    
    function TwoSumUsingBrute(nums, target){
        let map = new Map();

        for(let i=0; i<nums.length; i++){
               if(map.has(target - nums[i])){
                    return [map.get(target - nums[i]), i]
               } 
             map.set(nums[i], i)  
        }
        return [-1,-1]
    }

    let nums = [2,6,5,8,11]
    let result4 = TwoSumUsingBrute(nums, 14)
    console.log("Revision based Brute Result: ",result4);
    


    // Using Two Pointers : It will be optimal in terms of space as you are not using any space like hashmap here but in terms of Time complexity it is more than the hashing approach which is O(n log n) for just sorting which is a dominant term
    

    function TwoSumUsingOptimalIndexValues(nums, target){
        nums.sort((a, b )=> a - b)

        let left = 0;
        let right = nums.length - 1;

        while(left < right){
            if(nums[left] + nums[right] == target){
                return [left , right]
            }else if(nums[left] + nums[right] < target){
                left++
            }else{
                right--
            }

        }
    return [-1,-1]
        
    }

    let nums2 = [2,6,5,8,11]
    let result5 = TwoSumUsingOptimalIndexValues(nums2, 14)
    console.log(result5);
    
