// L,1,2,3,4 = 0
// L,1,2,3   = 0
// L,1,2     = 0
// 1,2,3,4   = 0
// 1,2,3     = 0
// 1,2       ~ 0
// 2,3,4     = 0
// 2,3       ~ 0
// 3,4       ~ 0


function test(){
    data.forEach(record=>{
        var fullRepeate = find(record);
        if(fullRepeate>1)
            console.log(record.toString() + " - " + fullRepeate);
    });
    
    data.forEach(record=>{
        var number4repeate = findPart(record.slice(1,5),1,5);
        if(number4repeate>1)
            console.log(record.toString() + " - " + number4repeate);
    });
}