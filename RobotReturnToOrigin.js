

let str = 'LR'

var judgeCircle = function(str) {
    let h = 0;
    let v = 0;
    for(let i=0;i<str.length;i++){
        if(str[i]==='L'){
            ++h
        }
        if(str[i]==='R'){
            --h
        }
        if(str[i]==='U'){
            ++v
        }
        if(str[i]==='D'){
            --v
        }
    }
    return h === 0 && v === 0
};

console.log(judgeCircle(str))