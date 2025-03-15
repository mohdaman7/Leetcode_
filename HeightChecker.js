
let heights = [1,1,4,2,1,3];
var heightChecker = function(heights) {
    let h=[...heights].sort((a,b)=>a-b)
    let count=0
    for(let i=0;i<h.length;i++){
        if(h[i] != heights[i]){
            count++
        }
    }
    return count
};

console.log(heightChecker(heights))