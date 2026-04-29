// brute Force approach O(n^2)
let arr = [1,1,2,2,3,4,4,4,4,4]

for(let i=0; i<arr.length; i++){
    let alreadySeen = false
    for(let k=0; k<i; k++){
        if(arr[k] === arr[i]){
            alreadySeen = true
            break;
        }
    }
    if(alreadySeen) continue;
    
    let count = 0;
    for(let j=i; j<arr.length; j++){
        if(arr[i] == arr[j]){
            count++;
        }  
    }
    console.log(arr[i], "→", count);
}


// Optimal Solution : Using Hashing
let map = new Map();

for(let i=0; i<arr.length; i++){
    let x = arr[i]

    if(map.has(x)){
        map.set(x, map.get(x) + 1)
    }else{
        map.set(x, 1)
    }
}

console.log(map);
