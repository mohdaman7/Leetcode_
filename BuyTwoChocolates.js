let prices = [1,2,2], money = 3

var buyChoco = function(prices, money) {
    prices.sort((a,b)=>a-b);
    sum = prices[0] + prices[1];
    if(sum<=money){
        return money-sum;
    }else{
        return money
    }
};

console.log(buyChoco(prices,money))


