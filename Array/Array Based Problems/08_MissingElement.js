let arr = [3,7,5,4,2,1,8]  
let maxValue = arr.length + 1
let RequiredSum = (maxValue * (maxValue + 1)) / 2
let currentSum = 0;

for(let i=0; i<arr.length; i++){
    currentSum = currentSum + arr[i]    
}

let missingElement =  RequiredSum - currentSum
console.log(missingElement);


