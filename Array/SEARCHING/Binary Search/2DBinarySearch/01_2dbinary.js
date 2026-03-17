let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
let rows = matrix.length
let cols = matrix[0].length
let low = 0;
let high = rows * cols - 1;
let target = 7

while(low<=high){
    let mid = Math.floor((low + high) / 2)
    let row = Math.floor(mid/cols)
    let col = mid % cols
    if(matrix[row][col] === target){
        console.log(mid);
        break;
    }else if(matrix[row][col] > target){
        high = mid - 1
    }else{
        low = mid + 1;
    }
}




