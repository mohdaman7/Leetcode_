
let sentence = "thequickbrownfoxjumpsoverthelazydog";

var checkIfPangram = function(sentence) {
    let abc = 'abcdefghijklmnopqrstuvwsyz';
    let count = 0;
    for(let i=0;i<abc.length;i++){
        if(sentence.includes(abc[i])){
            count++
        }
    }
    if(count>25){
        return true
    }else{
        return false
    }
   
};

console.log(checkIfPangram(sentence));