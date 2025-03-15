

let n = 2, commands = ["RIGHT","DOWN"];
var finalPositionOfSnake = function(n, commands) {
    let pos = 0;
    for(let i=0;i<commands.length;i++){
        if(commands[i]=="RIGHT"){
            pos+=1
        }else if(commands[i]=="LEFT"){
            pos-=1
        }else if(commands[i]=="DOWN"){
            pos+=n
        }else if(commands[i]=="UP"){
            pos-=n
        }
    }
    return pos
};
console.log(finalPositionOfSnake(n,commands))