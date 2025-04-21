


// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

 

// Example 1:

// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]




let words = ["cool", "lock", "cook"];

var commonChars = function(words) {
    let result = [];
    let str = words[0].split('');

    for (let char of str) {
        let isCommon = true;
        for (let i = 1; i < words.length; i++) {
            if (!words[i].includes(char)) {
                isCommon = false;
                break;
            }
        }

        if (isCommon) {
            result.push(char);
            for (let i = 1; i < words.length; i++) {
                let index = words[i].indexOf(char);
                words[i] = words[i].slice(0, index) + words[i].slice(index + 1);
                // console.log(words[i])
            }
        }
    }

    return result;
};

console.log(commonChars(words));