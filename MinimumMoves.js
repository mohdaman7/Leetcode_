
let s = "XXOX";

var minimumMoves = function(s) {
    let count = 0;
    for(let i=0;i<s.length;i++){
        if(s[i]=='X'){
            count++
            i+=2
        }
    }
    return count
};

console.log(minimumMoves(s))



// let s = 'five thousend';

// var fun = function(s){
//     let arr = s.split(' ');
//     let res = ''
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]=='one'){
//             res += '1' 
//         }else if(arr[i]=='two'){
//             res += '2'
//         }else if(arr[i]=='three'){
//             res += '3'
//         }
//         else if(arr[i]=='four'){
//             res += '4'
//         }else if(arr[i]=='five'){
//             res += '5'
//         }
//         else if(arr[i]=='six'){
//             res += '6'
//         }else if(arr[i]=='seven'){
//             res += '7'
//         }
//         else if(arr[i]=='eight'){
//             res += '8'
//         }
//         else if(arr[i]=='nine'){
//             res += '9'
//         }else if(arr[i]=='ten'){
//             res += '10'
//         }
//         if(arr[i]=='thousend'){
//             res += '000'
//         }
//     }
//     return parseInt(res)
// }
// console.log(fun(s))
