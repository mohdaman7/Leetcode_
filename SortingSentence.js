
let s = "is2 sentence4 This1 a3";

var sortSentence = function(s) {
    let arr = s.split(' ')
    let res = []
    for(let i=0;i<arr.length;i++){
        let index = arr[i][arr[i].length-1]
        res[index-1]= arr[i].slice(0,arr[i].length-1)
    }
    return res.join(' ')
};

console.log(sortSentence(s))