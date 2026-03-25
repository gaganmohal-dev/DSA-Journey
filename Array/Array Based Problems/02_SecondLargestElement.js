// Brute Force Approach, Time Complexity O(n log n) for sorting and O(n) for loop, so total O(n log n + n) which is finally O(n log n) since the dominant term is O(n log n)!
function BruteSecondLargestSmallest(arr) {
    arr.sort((a , b) => a - b)
    const largest = arr[arr.length - 1];
    const smallest = arr[0]
    let secondLargest = -1
    let secondSmallest = -1

    for(let i = arr.length-2; i >= 0; i--){
         if(arr[i] !== largest){
            secondLargest = arr[i]
            break;
         }   
    }

    for(let i=1; i<arr.length; i++){
        if(arr[i] !== smallest){
            secondSmallest = arr[i]
            break;
        }
    }
    return [secondLargest, secondSmallest]
    
} 


// Better Approach
function OptimalSecondLargestSmallest(arr){  // arr = [8,1,2,4,7,6,7,5]
    let largest = arr[0]
    let smallest = arr[0]
    let secondLargest = -1
    let secondSmallest = Infinity
    for(let i=1; i<arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest
            largest = arr[i]
        }else if(arr[i] > secondLargest && arr[i] !== largest){
            secondLargest = arr[i] 
        }
    }

    for(let i=1; i<arr.length; i++){ // [2,4,3,3,1]
        if(arr[i] < smallest){
            secondSmallest = smallest  // 4 // 3
            smallest = arr[i]  // 3 // 1
        }else if(arr[i] !== smallest && arr[i] < secondSmallest){
            secondSmallest = arr[i]
        }
    }
    return [secondLargest, secondSmallest]
}


let arr = [8,1,2,4,7,6,7,5]
let BruteResult = BruteSecondLargestSmallest(arr)
let OptimalResult = OptimalSecondLargestSmallest(arr)
console.log(" Second Largest using Brute force: ",BruteResult);
console.log("Second Largest using Optimal way:",OptimalResult);




