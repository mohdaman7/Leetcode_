let num = "51230100";

var removeTrailingZeros = function(num) {
    return num.replace(/0+$/,'')
};

console.log(removeTrailingZeros(num))