let accounts = [[1,2,3],[3,2,1]];

var maximumWealth = function(accounts) {
    let arr = [];
    let sum;
    for(let i=0;i<accounts.length;i++){
        sum=0;
        for(let j=0;j<accounts[i].length;j++){
            sum+=accounts[i][j]
        }
        arr.push(sum)
    }
    return Math.max(...arr)
};

console.log(maximumWealth(accounts))