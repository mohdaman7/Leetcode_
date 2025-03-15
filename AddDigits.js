
let num = 38

var addDigits = function(num) {
    num = num.toString();
    let newNumber = 0;
    for(let i=0;i<num.length;i++){
        newNumber += parseInt(num[i])
    }
    if(newNumber.toString().length === 1){
        return newNumber
    }else{
        return addDigits(newNumber)
    }
};

console.log(addDigits(num))

