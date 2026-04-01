
// O(n) Time complexity and This is Optimal Approach, specifically in brute force you can increase the Space complexity by taking more variables or duplicate array itself but in Time complexity would be same

let arr = [1,2,3,4,5]
temp = arr[0]

for(let i=0; i<arr.length; i++){
    arr[i] = arr[i + 1]
}
arr[arr.length - 1] = temp
console.log(arr);


