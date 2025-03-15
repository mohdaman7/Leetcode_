let s = 'book'

var halvesAreAlike = function(s) {
    let vowels = ['a','e','i','o','u','A', 'E', 'I', 'O', 'U'];
    let a = '' , b = '';
    let count1=0,count2=0;
    for(let i=0;i<s.length;i++){
        if(i<s.length/2){
            a+=s[i]
        }else{
            b+=s[i]
        }
    }
    for(let i=0;i<a.length;i++){
        if(vowels.includes(a[i])){
            count1++
        }
         if(vowels.includes(b[i])){
            count2++
        }
    }
    return count1===count2
    
};

console.log(halvesAreAlike(s))


