
let salary = [4000,3000,1000,2000]
var average = function(salary) {
    let sum = 0, len = 0;
    let min = Math.max(...salary)
    let max = Math.min(...salary)
    for(let i=0;i<salary.length;i++){
        if(salary[i]!==min && salary[i]!==max){
            sum+=salary[i]
            len++
        }
    }
    return sum/len
};
console.log(average(salary))

