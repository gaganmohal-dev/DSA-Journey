
    // Optimal Approach: Using Two Pointers


    function TwoSumUsingOptimal(arr, target){
        let left = 0;
        let right = arr.length - 1;

        arr.sort((a, b) => a - b);

        while(left < right){
            if(arr[left] + arr[right] == target){
                return true;
            }else if(arr[left] + arr[right] < target){
                left++
            }else{
                right--
            }

            
        }
        return false
    }

    let arr3 = [2,6,5,8,11]
    let result3 = TwoSumUsingOptimal(arr3, 14);
    console.log(result3);
