//get random decimal
function GetRandomDecimal(maxInt,maxDec){
    return (Math.random()*maxInt).toFixed(maxDec);
}

//get random int
function GetRandomInt(maxInt){
    return Math.floor(Math.random()*maxInt);
}

//round to int
function RoundToInt(decToRound){
    return Math.round(decToRound);
}

//get int from decimal
function DecimalToInt(decToInt){
    return Math.floor(decToInt);
}

//get max
//GetMax([1, 33, 288,8]));
function GetMax(myArray){
    return Math.max(...myArray);
}

//get min
//GetMin([1, 33, 288,8]));
function GetMin(myArray){
    return Math.min(...myArray);
}

//get sign - positive/negative
function IsPositive(number){
    let intToBool = false;
    if(Math.sign(number) == 1){
        intToBool = true;
    }
    else{
        intToBool = false;
    }
    return intToBool;
}

//get date
function GetDate(setDate){
    //let test = Date(Date.now());// jour systeme
    let myDate;
    let myTime;
    setDate ? myDate = new Date(setDate) : myDate = new Date();
    let myMonths = new Array('Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre');
    let myDays = new Array('Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi');
    let trueHours, trueMinutes, trueSeconds;
    myDate.getHours()<10 ? trueHours = "0"+myDate.getHours().toString() : trueHours = myDate.getHours().toString();
    myDate.getMinutes()<10 ? trueMinutes = "0"+myDate.getMinutes().toString() : trueMinutes = myDate.getMinutes().toString();
    myDate.getSeconds()<10 ? trueSeconds = "0"+myDate.getSeconds().toString() : trueSeconds = myDate.getSeconds().toString();

    setDate ? myTime = "" : myTime = " - "+trueHours+"h"+trueMinutes+"min"+trueSeconds+"s";
    return (myDays[myDate.getDay()]+" "+myDate.getDate()+" "+myMonths[myDate.getMonth()]+" "+myDate.getFullYear()+myTime);
}