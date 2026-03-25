let arr = [11,2,5,10,8,9,3]
let max = arr[0]
for(let i=1; i<arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
    }
}
console.log(max);
