// Insertion at front,end and Specific Index

//Insertion at the End
let names = ['Gagan', 'Vinni', 'Simar', 'Varun']
names[names.length] = 'Sahib';   // complexity is O(1) coz direct insertion at a particular index not shifting
console.log(names);

//Insertion at the Front
let surname = ['Mohal', 'Bedi']
for(let i=surname.length-1; i>=0; i--){         // O(n)
    surname[i+1] = surname[i];              
}
surname[0] = 'Kamra'   // O(1)
console.log(surname);


// Insertion at specific Index
let success = ['DSA', 'Web Dev', 'Youtube']
let valueBefore = -1

for(let i=0; i<success.length; i++){  // O(n)
    if(success[i] == 'Web Dev'){
        valueBefore = i
    }
}

if(valueBefore == -1){
    console.log('Element not found');
}else{
    
        for(let i = success.length-1; i >valueBefore ; i-- ){  //O(n)
            success[i+1] = success[i]
        }

        success[valueBefore + 1] = 'French'  //O(1)
    }

console.log(success);

