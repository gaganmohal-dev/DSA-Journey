
function pushing( arr, valuetopush){
    // console.log(arr.length);
    arr[arr.length] = valuetopush; // main logic to push the value at last manually
}

// created Array
let tasks = ["studyDSA", "GYM", "Web dev Practice"]
pushing(tasks,"Revision of Arrays"); // passing two values to 
// console.log(tasks);


// printing All tasks(array)
for (const x of tasks){
    console.log(x);
}
// OR traditional for loop
for(let i=0; i<tasks.length; i++){
    console.log(`The value of index ${i}`, tasks[i])
}

// Reading single value at first index
console.log(tasks[0]);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Updating 

tasks[1] = "Evening Gym Workout"
console.log(tasks);

// dynamic updation

for(let x in tasks){
    if(tasks[x] === "GYM"){
        tasks[x] = "Evening GYM workout"
    }
}

console.log(tasks);

// Removing 

// Using core logic for Removing the element out of Array.
// logic of shifting

let removingIndex = -1;

for(let i=0; i < tasks.length; i++){
    if(tasks[i] == "Web dev Practice"){
        removingIndex = i;        
    }
}

if(removingIndex !== -1){
    for(let i = removingIndex; i < tasks.length - 1; i++){
        tasks[i] = tasks[i + 1]
    }
    tasks.length = tasks.length - 1
}

console.log("After removing : " ,tasks);









