let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
let target = 7
for(let i=0; i<matrix.length; i++){
    for(let j=0; j<matrix[i].length; j++){
        if(matrix[i][j] === target){
            console.log(`${i}th row, ${j}th column`);
            
        }        

        
    }
    
}

