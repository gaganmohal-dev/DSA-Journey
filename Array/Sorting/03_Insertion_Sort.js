// This one is Insertion sort but here it is lacking something:
// basically it is swapping again and again like bubbling up to left, but in Insertion sort, we swap once and we search the position first
let arr = [2,8,5,3,9,4]
let temp = 0;
for(let i=1; i<arr.length; i++){
    for(let j = i; j>0; j--){
            if(arr[j] < arr[j-1]){
                temp = arr[j-1]
                arr[j-1] = arr[j]
                arr[j] = temp
            }else
            {
                break;
            }
        
    }
}
console.log(arr);


// Optimized where swapping happens at last

let arr2 = [2,5,4,8,7,1]

for(let i=1; i<arr2.length; i++){
    let temp = arr2[i];
    let j = i - 1 
    while(j >= 0 && arr2[j] > temp){
        arr2[j+1] = arr2[j];
        j--;    
    }
    arr2[j + 1] = temp;
}

console.log(arr2);

