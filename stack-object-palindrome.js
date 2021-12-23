// Stack implementation using function/class

// We will use a object to store all the values in a stack and define methods to interact with stack
const Stack = function(){
    this.count = 0; //current count of the stack size
    this.storage = {}; //stack values

    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
    }

    this.pop = function(){
        if(this.count === 0){
            return undefined;
        }

        this.count--;
        let res = this.storage[this.count];
        delete this.storage[this.count];
        return res;
    }

    this.size = function(){
        return this.count;
    }

    this.peek = function(){
        return this.storage[this.count - 1]
    }
}

let word = "racecar";

let rword = "";

let letters = new Stack();

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

