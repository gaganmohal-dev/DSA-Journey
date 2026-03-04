// Using Binary Search
// input = 25
// 1 * 1= 1, 2 * 2 = 4, 3 * 3 = 9, 4 * 4 = 16, 5 * 5 = 25

function sqrt(n){
    let low = 1;
    let high = n;
    let ans = -1;

    while(low <= high){
        let mid = Math.floor((low + high) / 2);

        if(mid * mid <= n){
            low = mid + 1;
            ans = mid
        }else{
            high = mid - 1;
        }
    }
    return ans
}

let input = 15625
let output = sqrt(input);
console.log(output);


