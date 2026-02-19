let nums = [1,2,3,4,5]

// Traversing or touching each value of array
for(let i=0; i<nums.length; i++){
    console.log(nums[i]); 
}

// Sum of elements by Traversing

let sum = 0;
for(let i=0; i<nums.length; i++){
    sum = sum + nums[i] 
}
console.log(sum);

// Product of Elements inside the Array
let product = 1;
for(let i=0; i<nums.length; i++){
    product = product * nums[i]
}
console.log(product);


// Traversing and Finding the Max 

let arrofnum = [10,20,3,100,50,5,90]
let max = arrofnum[0]
for(let i=1; i < arrofnum.length; i++){
        if(arrofnum[i] > max){
            max = arrofnum[i]
        }
    }
console.log(max);


// Traversing and Finding the Min

// let arrofnum = [10,20,3,100,50,5,90]
let min = arrofnum[0]
for(let i=1; i < arrofnum.length; i++){
    if(min > arrofnum[i]){
        min = arrofnum[i]
    }
}
console.log(min);

// Reverse of that Array

for(let i=nums.length; i>=0; i--){
    console.log(nums[i]);
    
}


// Traversing to find the second max value

let arr = [1,2,10,5,6,7,3,4]
let Fmax = -Infinity
let Smax = -Infinity
for(let i=0; i<arr.length; i++){
    if(arr[i] > Fmax ){
        Smax = Fmax;
        Fmax = arr[i];   
    }else if(arr[i] > Smax && arr[i] !== Fmax){
        Smax = arr[i]
    }
}

console.log("The maximum value :", Fmax);
console.log("The second Max value: ", Smax);

// Traversing and Counting Even numbers in Array


// let arr = [1,2,10,5,6,3,4]

let CounterOfEven = 0; 
let CounterOfOdd = 0;

for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 == 0){
        CounterOfEven = CounterOfEven + 1;
    }else{
        CounterOfOdd = CounterOfOdd + 1;
    }
}

console.log(CounterOfEven);
console.log(CounterOfOdd);
