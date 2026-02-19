// Deletion in Array 

// Deletion at last
let cars = ['BMW', 'TATA', 'Maruti', 'Mercedes', 'Mustang 1969']
cars.length = cars.length - 1   // for me the logic to remove the last element of array
console.log(cars);

// Deletion at front

for(let i = 0; i < cars.length - 1; i++){   // O(n)
    cars[i] = cars[i+1];
}
cars.length = cars.length - 1    // O(1)
console.log(cars);



// Deletion at specific Index  // array left = ['Tata' , 'Maruti' , 'Mercedes']
let findingIndex = -1;

for(let i=0; i<cars.length; i++){
    if(cars[i] == "Maruti"){
        findingIndex = i;        
    }
}

if(findingIndex != -1 ){
    for(let i = findingIndex ; i<cars.length-1; i++){
        cars[i] = cars[i + 1]
    }
    cars.length = cars.length - 1;
}else{
    console.log("The index you are finding doesnot exist");
    
}
console.log(cars);

