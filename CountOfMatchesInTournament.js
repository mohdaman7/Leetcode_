
let n = 7

var numberOfMatches = function(n) {
    let sum = 0;
    let teams = n;
    while(Math.floor(teams/2)>0){
        if(teams % 2 === 0){
            sum += teams/2
            teams = teams/2
        }else{
            sum += (teams-1)/2
            teams = (teams-1)/2+1
        }
    }
    return sum;
};

console.log(numberOfMatches(n))