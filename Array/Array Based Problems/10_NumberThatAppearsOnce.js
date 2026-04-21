// Brute Force approach: O(n^2)
let arr = [2,3,3,4,2,1,1]

for(let i=0; i<arr.length; i++){
    let count = 0;
    for(let j=0; j<arr.length; j++){
        if(arr[i] === arr[j]){
            count++  //1 //2
        }
    }
    if(count===1){
        console.log("The single element out of all the twices is :" ,arr[i]);
    }
}

// ----------------------------------------------------------------------
// Optimal Solution using XOR: XOR cancel out the same ones so.. and the time complexity of it is : O(n)
let result = 0;

for(let i=0; i<arr.length; i++){
    result = result ^ arr[i]    
}

console.log(result);
