let arr = [1,2,3]

let swapped = false;
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length-1-i; j++){
        if(arr[j] > arr[j + 1]){
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp

            swapped = true
        }
    }

    if(swapped == false){
        console.log("Already Sorted");
        break;
    }
}

if(swapped){
    console.log(arr);
}