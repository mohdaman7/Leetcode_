
let command = "G()(al)";

var interpret = function(command) {
    let arr = command.split('');
    let str = '';
    for(let i=0;i<arr.length;i++){
        if(arr[i]=='('&&arr[i+1]==')'){
            str+='o'
        }
        if(arr[i]!='('&&arr[i]!=')') {
            str+=arr[i]
        }
    }
    return str
};

console.log(interpret(command));