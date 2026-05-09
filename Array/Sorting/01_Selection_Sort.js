let arr = [13,46,24,52,20,9]

for(let i=0; i<arr.length; i++){
    let minInd = i;
    for(let j=i + 1; j<arr.length; j++){
        if(arr[j] < arr[minInd]){
            minInd = j;
        }
    }

    if(minInd !== i){
        let temp = arr[minInd]
        arr[minInd] = arr[i]
        arr[i] = temp 

    }
}

console.log(arr);
