// check for palindrom using stack (array)

let letters = [];

// Word to check
let word = "racecar";

// Reverse of the word
let rword = "";

// We create reverse of the word by using stack
// For that we have to create a stack with the characters of word

for(let i=0;i<word.length; i++){
    letters.push(word.charAt(i))
}

// Now we will pop the stack one by one and insert the characters to rword
for(let i=0;i<word.length;i++){
    rword += letters.pop();
}

if(rword === word){
    console.log(`${word} is a palindrome`)
}else{
    console.log(`${word} is not a palindrome`)
}
