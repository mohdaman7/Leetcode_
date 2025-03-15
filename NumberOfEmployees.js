let hours = [0,1,2,3,4], target = 2

var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let count = 0;
    for(let i=0;i<hours.length;i++){
        if(hours[i]>=target){
            count++;
        }
    }
    return count
};

console.log(numberOfEmployeesWhoMetTarget(hours,target))
