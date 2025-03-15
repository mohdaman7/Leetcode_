
let address = "1.1.1.1";

var defangIPaddr = function(address) {
    let arr = address.split('');
    for(let i=0;i<address.length;i++){
        if(arr[i]=='.'){
            arr[i] = '[.]'
        }
    }
    return arr.join('');
}

console.log(defangIPaddr(address))