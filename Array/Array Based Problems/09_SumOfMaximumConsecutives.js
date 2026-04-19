let arr = [1,1,0,0,1,1,1,0,1,1,1,1,1]
let sumOf1s = 0   // 2
let sumOf0s = 0   // 2
let count = 0;

for(let i=0; i<arr.length; i++){
    if( arr[i] == 1){
        if(i===0 || arr[i - 1] == 0){
            count = 0
        }
        count++;
        if(sumOf1s < count){
            sumOf1s = count;
        }
    }else{
        if(i===0 || arr[i - 1] == 1){
            count = 0;
        }
        count++

        if(sumOf0s < count){
            sumOf0s = count
        }
    }
}   


if(sumOf1s > sumOf0s){
    console.log(`There are ${sumOf1s} consecutive 1's which is maximum `);
    
}else{
        console.log(`There are ${sumOf0s} consecutive 0's which is maximum `);

}
// ------------------------------------------------------------------------------------
// Till here we were handling both 1s and 0s so we had to do this above
// ------------------------------------------------------------------------------------


// for only consectives 1's

let cnt = 0;
let maxi = 0
for(let i=0; i<arr.length; i++){
    if(arr[i] == 1) {
        cnt++;
    }else{
        cnt=0
    }

    maxi = Math.max(maxi, cnt);
}

console.log(maxi);
