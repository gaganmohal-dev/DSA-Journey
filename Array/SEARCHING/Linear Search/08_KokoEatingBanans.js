function KokoEatingBananas(piles, hours){
    for(let k=1; k<= Math.max(...piles); k++){
        let hourSpent = 0;

        for(let x of piles){
            hourSpent = hourSpent + (Math.ceil((x / k)));
        }

        if(hourSpent <= hours){
            return k;
        }
    }
    return -1;
}

let piles = [3,5,7,11]
let hours = 5
let result = KokoEatingBananas(piles, hours)

if(result == -1){
    console.log(`KOKO WOULD DIE BRUHH, ${hours} Hourss.. for these much banans Are you Serious??, Give some More time`);
    
}else{
    console.log(`Minimum number of Banans required to eat in an hour is ${result} `);
}