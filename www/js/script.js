var current = 1;

function setLetter(letter){
    document.getElementById('letter').value = letter;
}

function setResult(value){
    document.getElementById('result-value').textContent = value;
}

function numberClick(val){
    if(current<5){
        var currentLength = document.getElementById('number-'+current).value.length;
        var currentValue = document.getElementById('number-'+current).value;
        if(currentLength == 2){
            current++;
        }
        if(current<5)
            document.getElementById('number-'+current).value += val.toString();
    }
}

function reset(){
    this.current = 1
    setLetter("");
    document.getElementById('number-1').value="";
    document.getElementById('number-2').value="";
    document.getElementById('number-3').value="";
    document.getElementById('number-4').value="";
    setResult(0);
}

function ok(){
    var result = '';
    var ticket = [
        document.getElementById('letter').value,
        parseInt(document.getElementById('number-1').value),
        parseInt(document.getElementById('number-2').value),
        parseInt(document.getElementById('number-3').value),
        parseInt(document.getElementById('number-4').value),
    ];
    //////////////////////////////
    if(isRepeate(ticket))
        result+= "R-1, ";
    else
        result+= "R-0, ";
    //////////////////////////////
    var occurrenceProfile = getOccurrenceProfile(ticket);
    
    if(occurrence_1(occurrenceProfile)) result+= "One-1, ";
    else result+= "One-0, ";
    
    if(occurrence_1(occurrenceProfile)) result+= "Two-1";
    else result+= "Two-0";
    setResult(result);
}

var data = [["I",3,19,28,70],["N",37,39,47,52],["O",51,55,70,72],["N",9,10,27,59],["K",5,59,60,69],["Q",12,13,26,54],["D",12,18,21,55],["Y",5,23,65,73],["H",14,43,48,59],["V",34,40,67,68],["R",19,21,33,71],["R",23,53,56,57],
    ["Z",8,20,29,48],["M",31,41,69,72],["Z",32,49,65,72],["H",8,19,35,63],["J",35,38,58,64],["U",32,36,67,71],["Z",1,28,51,62],["T",8,40,58,68],["S",28,48,50,63],["X",6,11,19,75],["G",1,32,70,73],["C",20,21,44,52],
    ["B",15,17,51,60],["A",15,56,58,66],["M",25,28,56,80],["Q",5,11,43,79],["P",6,12,15,67],["K",5,36,64,68],["X",40,53,71,78],["Y",18,20,47,60],["F",17,20,22,75],["D",36,65,74,76],["T",27,29,59,61],["U",3,7,61,79],
    ["M",22,24,25,79],["S",27,35,43,52],["R",24,65,70,74],["J",13,20,41,72],["I",6,16,27,29],["A",17,18,25,32],["E",6,53,59,73],["D",8,57,59,65],["K",1,68,69,76],["L",7,17,58,71],["C",12,23,24,25],["Y",5,14,41,56],
    ["W",24,37,46,59],["L",5,44,59,60],["F",6,21,45,71],["J",3,21,38,74],["V",38,45,51,72],["D",17,21,50,53],["E",2,11,65,73],["V",11,21,55,80],["E",29,47,60,74],["T",3,11,24,45],["K",2,32,66,75],["A",5,16,38,61],
    ["C",56,60,71,77],["W",19,60,77,80],["Z",9,20,45,79],["S",22,30,53,75],["G",14,24,43,52],["G",16,33,44,80],["L",14,29,39,76],["Q",2,24,44,68],["Z",12,23,50,80],["E",51,65,74,78],["L",14,38,46,54],["J",35,44,49,63],
    ["J",7,19,45,60],["D",25,47,60,70],["E",7,28,36,59],["L",1,4,17,42],["Q",36,45,52,71],["G",15,20,46,78],["C",6,30,58,75],["Z",13,20,44,68],["O",1,7,45,69],["V",3,14,36,62],["M",21,38,59,64],["E",7,20,54,63],
    ["P",40,42,54,65],["M",21,35,47,53],["Y",22,46,54,69],["V",13,33,58,75],["W",10,66,72,80],["M",19,22,29,30],["E",31,34,38,70],["O",10,34,37,66],["L",37,46,63,67],["Z",37,55,66,72],["R",23,40,48,77],["M",8,54,72,73],
    ["E",15,39,64,67],["E",31,38,50,59],["W",37,42,52,67],["M",18,36,56,67],["B",17,19,46,74],["F",2,8,24,60],["E",6,10,12,74],["D",3,23,58,78],["E",27,33,44,67],["Y",26,44,47,64],["E",32,39,41,69],["X",17,67,74,78],
    ["N",9,35,57,77],["P",6,7,17,33],["D",21,43,51,78],["N",2,4,38,51],["F",6,9,32,62],["N",43,54,76,79],["E",4,33,39,54],["G",11,26,31,59],["O",40,46,51,78],["N",8,19,31,41],["R",9,21,28,69],["T",1,10,63,72],["H",2,21,43,80],
    ["T",26,41,43,54],["K",1,3,66,79],["I",18,31,53,63],["K",2,9,12,51],["B",5,31,78,79],["Z",30,59,71,75],["D",4,25,64,70],["R",33,57,74,79],["Q",3,13,25,76],["H",4,13,20,47],["R",10,17,39,62],["Y",17,28,31,33],
    ["K",28,29,32,78],["Z",12,21,22,67],["N",12,25,38,57],["J",42,49,69,72],["Y",34,36,40,76],["N",9,30,54,67],["Y",23,39,46,50],["L",18,20,34,38],["R",13,53,59,76],["W",3,57,63,76],["R",27,41,61,69],["P",19,39,44,67],
    ["A",8,50,66,73],["I",1,8,17,52],["X",6,22,31,33],["K",4,16,23,67],["H",50,54,70,78],["V",37,40,54,69],["H",19,29,47,72],["H",42,55,65,72],["F",1,2,3,46],["N",2,25,34,58],["V",2,13,33,64],["I",17,29,44,57],["B",5,10,63,64],
    ["Y",45,49,79,80],["O",21,39,45,72],["I",14,30,69,71],["I",5,25,60,61],["w",3,23,37,45],["N",31,40,54,75],["E",17,28,66,69],["C",7,34,47,72],["R",45,48,56,74],["D",5,37,57,78],["I",7,46,72,78],["I",9,29,51,74],
    ["L",7,11,70,71],["C",44,58,64,79],["C",42,64,65,72],["C",5,21,41,56],["T",3,30,53,72],["M",23,26,28,79],["C",17,52,65,70],["K",32,34,36,74]];

var dataLength = data.length;

// Array comparison
function find(array){
    for(var i = 0; i<dataLength; i++)
        if(isArrayEqual(array,data[i]))
            return true;
    return false;
}

function findPart(array,start,end){
    for(var i = 0; i<dataLength; i++)
        if(isArrayEqual(array,data[i].slice(start,end)))
            return true;
    return false;
}

function isArrayEqual(a1,a2){
    return a1.toString() == a2.toString();
}

function isRepeate(ticket){
    return isArrayRepeate(ticket);
}

function isArrayRepeate(ticket){
    if (find(ticket))
        return true;
    if (findPart(ticket.slice(0,4),0,4))
        return true;
    if (findPart(ticket.slice(0,3),0,3))
        return true;
    if (findPart(ticket.slice(0,2),0,2))
        return true;
    if (findPart(ticket.slice(1,5),1,5))
        return true;
    if (findPart(ticket.slice(1,4),1,4))
        return true;
    if (findPart(ticket.slice(1,3),1,3))
        return true;
    if (findPart(ticket.slice(2,5),2,5))
        return true;
    if (findPart(ticket.slice(2,4),2,4))
        return true;
    if (findPart(ticket.slice(3,5),3,5))
        return true;
    return false;
}

// check occurence freequncy
function occurrence_1(array){
    return array[1]==1 || array[2]==1 || array[3]==1 || array[4]==1;
}
function occurrence_2(array){
    return array[1]==2 || array[2]==2 || array[3]==2 || array[4]==2;
}
function getOccurrenceProfile(array){
    var first = findOccurence(array[1]);
    var second = findOccurence(array[2]);
    var third = findOccurence(array[3]);
    var forth = findOccurence(array[4]);
    return [first,second,third,forth];
}
function findOccurence(number){
    for(var i = dataLength-1; i>=0; i--){
        var row = data[i];
        if(number == row[1] || number == row[2] || number == row[3] || number == row[4])
            return dataLength-i;
    }
    return 0;
}







function cal(){
    for(var i = dataLength-1; i>0; i--){
        var row = data[i];
        console.log(i+","+data[i].toString()+",,"+getRow(row,i).toString());
    }
}
function getRow(array,index){
    var first = findOccurence(array[1],index);
    var second = findOccurence(array[2],index);
    var third = findOccurence(array[3],index);
    var forth = findOccurence(array[4],index);
    return [first,second,third,forth];
}
function findOccurence(number,index){
    for(var i = index-1; i>=0; i--){
        var row = data[i];
        if(number == row[1] || number == row[2] || number == row[3] || number == row[4])
            return index-i;
    }
    return 0;
}