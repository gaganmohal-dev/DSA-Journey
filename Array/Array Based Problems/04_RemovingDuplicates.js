// Removing Duplicates and returning the array containing unique elements along with how many too


// Worst case Brute Force Approach: Time- O(n^2)
let arr = [1,1,2,2,3,3,4]
let emptyArr = []

for(let i=0; i<arr.length; i++){
    if(!emptyArr.includes(arr[i])){
        emptyArr.push(arr[i])     
        }
        }
    

// console.log(emptyArr);

// A bit Better Brute Force Appraoch: see the time complexity: O()

let arr2 = [1,1,2,2,3,3,4,5]
let unique = new Set()
for(let i=0; i<arr2.length; i++){
    unique.add(arr2[i])
}

let index=0
for(let x of unique){
    arr2[index] = x  //1,2,3 
    index++     //1 // 2//3
}

// console.log(index);


// Optimal Approach using Two Pointer

let arr3 = [1,1,2,2,3,3,4,5,6,6]
let i = 0
for(let j=1; j<arr3.length; j++){
        if(arr3[j] !== arr3[i]){
            arr3[i + 1] = arr3[j]
            i++;
        }
}

console.log(i + 1);
