function QuickSort(low , high, arr){
    if(low < high){
        let i = low;
        let j = high;
        let pivot = arr[low]

  
        while(i < j){

            while(arr[i] <= pivot && i < high){
                i++;
            }

            while(arr[j] > pivot && j > low){
                j--;
            }

            if(i < j){
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }

        let temp = arr[low]
        arr[low] = arr[j]
        arr[j] = temp

        QuickSort(low,j-1,arr)
        QuickSort(j+1, high, arr)
    }
}

let arr = [2,5,4,7,6,8,9,1]
let low = 0;
let high = arr.length - 1;
QuickSort(low, high,arr)

console.log(arr);
