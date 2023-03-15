
// OBJECTS

let book = {
    topic: "JavaScript",
    edition: 7
};

console.log(book.topic);

book['author'] = 'Flanagan';

book.contents = {};

let parts = {
    numpages: 500,
    numChapters: 17,
}

book['contents'] = parts;

console.log(book);

let primes = [2,3,5,7];

//console.log(primes.length);

//primes = [];

//console.log(primes.length);

 book['contents'].primes = primes;

 console.log(book);

 let morePrimes = [9,11,13];

 book['contents'].primes += morePrimes;

 console.log(book);

 // =================================
 //  ARROW FUNCTION

 function plus1(x){
    return x + 1;
 }

 let y = 3;

 const result1 = plus1(3); // 4

 let square = function(x){
    return x*x;
 }

 const result2 = square(3); // 9

 const plus2 = x => x + 2;

 plus2(y); // plus1 = 5

 const three = x => x*x*x; // 

 console.log(three(plus2(y))); // 125

 // ==================================
 // Loops:

 function sum(array){

    let result = 0;

    for(let x of array){
        result += x;
    }

    return result;
 }

 const result3 = sum(primes);

 console.log(result3)

 let hex = 0xBADCAFE;

 console.log(y+hex);

 let num1 = 5;
 let num2 = .064;

 num1 = num1 + num2;

vetor = [4,1,2,5,3,9,8];
vetor.sort()
 
 console.log(num1);


 


