//MaximumContainers.js
// You are given a positive integer n representing an n x n cargo deck on a ship. Each cell on the deck can hold one container with a weight of exactly w.

// However, the total weight of all containers, if loaded onto the deck, must not exceed the ship's maximum weight capacity, maxWeight.

// Return the maximum number of containers that can be loaded onto the ship.

 

// Example 1:

// Input: n = 2, w = 3, maxWeight = 15

// Output: 4

// Explanation:

// The deck has 4 cells, and each container weighs 3. The total weight of loading all containers is 12, which does not exceed maxWeight.






let  n = 2, w = 3, maxWeight = 15;
var maxContainers = function(n, w, maxWeight) {
    let desk = n*n;
    let res = 0;
    for(let i=desk;i>=0;i--){
        if(desk*w <= maxWeight){
            res = desk
            break;
        }else{
            desk--
        }
    }
    return res
};
console.log(maxContainers(n,w,maxWeight))