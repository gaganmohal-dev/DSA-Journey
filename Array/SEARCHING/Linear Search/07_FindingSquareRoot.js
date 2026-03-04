// Linear Search..

function sqrt(n){
    let ans = -1;
    for(let i=1; i<=n; i++){
        if(i * i <= n){
            ans = i;
        }else{
            return ans;
        }
    }
}

let input = 625
let result = sqrt(input)
console.log(result);


