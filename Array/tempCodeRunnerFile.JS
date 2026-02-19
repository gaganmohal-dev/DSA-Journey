let removingIndex = -1;

for(let x in tasks){
    if(tasks[x] == "Web dev Practice"){
        removingIndex = x;        
    }
}

if(removingIndex !== -1){
    for(let i = removingIndex; i < tasks.length; i++){
        tasks[i] = tasks[i + 1]
    }
}