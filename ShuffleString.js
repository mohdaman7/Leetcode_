
const s = "codeleet", indices = [4,5,6,7,0,2,1,3];

var restoreString = function(s, indices) {
    let arr = [];
    let str;
    for(let i=0;i<indices.length;i++){
        str = s[i];
        arr[indices[i]] = str
    }
    return arr.join('')
};

console.log(restoreString(s,indices))