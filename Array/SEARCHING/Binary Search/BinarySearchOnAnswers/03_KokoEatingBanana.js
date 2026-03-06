function KokoEatingBananas(piles, hours){
    let low = 1;
    let high = Math.max(...piles)
    let ans = -1;

    while(low <= high){
        let mid = Math.floor((low + high) / 2)
        let hoursSpent = 0;

        for(x of piles){
            hoursSpent += Math.ceil((x / mid))
        } 

        if(hoursSpent <= hours){
            ans = mid;
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }
    return ans;

}

let piles = [3,5,7,11]
let hours = 6
let result = KokoEatingBananas(piles, hours)

console.log(result);
