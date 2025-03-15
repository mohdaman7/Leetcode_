let  hours = [12,12,30,24,24];

var countCompleteDayPairs = function(hours) {
    let count = 0;
    for(let i=0;i<hours.length;i++){
        for(let j=i+1;j<hours.length;j++){
            let num = hours[i]+hours[j]
            if(num%24==0){
                count++
            }
        }
    }
    return count
};

console.log(countCompleteDayPairs(hours))
