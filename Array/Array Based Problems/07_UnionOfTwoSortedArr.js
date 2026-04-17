// Brute Force Approach: O(n^2), as the outer loop and inside union.includes both takes O(n) thus O(n^2)
let arr1= [1,2,3,4,5,5]
let arr2 = [2,3,4,5,6,7,8]

let union = []

for(let i=0; i<arr1.length; i++){
    if(!union.includes(arr1[i])){
        union.push(arr1[i])
    }
}

for(let i=0; i<arr2.length; i++){
    if(!union.includes(arr2[i])){
        union.push(arr2[i])
    }
}

// console.log(union);

// --------------------------------------------------------------------

// Better Approach with O(n + m) Time and space complexity


let set = new Set([...arr1, ...arr2])
let newArr = Array.from(set)
// console.log(newArr);

// Optimal Solution


function unionOfTwoArrays(arr1, arr2, n, m){
    let output = []
    let i = 0;
    let j = 0;
    while(i < n && j < m){
        if(arr1[i] < arr2[j]){
            if(output.length == 0 || output[output.length - 1] !== arr1[i]){
                output.push(arr1[i])
            }
            i++;
        }
        else if(arr2[j] < arr1[i]){
            if(output.length == 0 || output[output.length - 1] !== arr2[j]){
                output.push(arr2[j])
            }
            j++
        }
        else{
            if(output.length ===0 || output[output.length - 1]  !== arr1[i]){
                output.push(arr1[i])
            }
            i++;
            j++;
        }
    }

    while(i < n){
          if(output.length ===0 || output[output.length - 1]  !== arr1[i]){
             output.push(arr1[i])
            }
            i++;
    }
    while(j < n){
          if(output.length ===0 || output[output.length - 1]  !== arr2[j]){
             output.push(arr2[j])
            }
        j++;
    }
    return output;
}

let result = unionOfTwoArrays(arr1, arr2, arr1.length, arr2.length)
console.log(result);
