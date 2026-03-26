// O(n) optimal
const arr = [10,1,2,3,4,5,6,7,8,9]
let result = false

for(let i=0; i<arr.length - 1; i++){
    if(arr[i] <= arr[i + 1] ){
        result = true;
    }else{
        result = false
        break;
    }

}

console.log(result);


// No optimal than this.. as otherwise you would have to compare each element with the curret value thus nested loops comes into the picture shows the real brute force approach leading O(n^2)


