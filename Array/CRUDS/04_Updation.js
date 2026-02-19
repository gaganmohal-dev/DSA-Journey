// Updation

let animals = ['Wolf', 'Horse', 'Lion']

//STATIC WAY (updating by index)
animals[2] = 'Elephant'
animals[0] = 'Geeraf'

//DYNAMIC WAY (Updating by value searching)

for(let i=0; i<animals.length; i++){
    if(animals[i] == 'Elephant'){
        animals[i] = 'Wolf'
        break;
    }
}

console.log(animals);
