
let title = "capiTalIze tHe titLe";

var capitalizeTitle = function(title) {
    return title.toLowerCase().split(" ").map((word)=>{
        if(word.length<=2){
           return word.toLowerCase()
        }
        else{
           return word[0].toUpperCase()+word.slice(1)
        }
    }).join(" ")
};

console.log(capitalizeTitle(title))