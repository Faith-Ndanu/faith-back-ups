// Write a function that takes a 'name' as an argument and prints a personalized greeting message to the user.
function greeting(name){
    console.log("Hi"+ " " + name + " " +"how are you!");
}
greeting("kesa")

//2. Write const getEvenNumbers = (inputs) => inputs.filter( x => x % 2 === 0 );
mixedNumbers = [0, 1, 6, 7, 3, 14]
function returnEvenNumbersFromArray(array) {
	finishedArray = []
	array.forEach(function(num) {
  	if(!(num % 2)) {
    	finishedArray.push(num)
    }
  })
  return finishedArray;
}
console.log(returnEvenNumbersFromArray(mixedNumbers)) 

//Write a function `countVowels` that counts the number of vowels in a given string.

const vowels = ["a", "e", "i", "o", "u"]
function countVowel(str) {
    let count = 0;         
    for (let letter of str.toLowerCase()) {      
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count           
}
const string = "lovelacelab"                              
const result = countVowel(string);
console.log(result);

function countVowels(str){
    let vowels = ['a','A','e','E','I','o','O','U','u']
    let count = 0
    str.split("").forEach((char)=> {
     if(vowels.includes(char)) {
       count++
     }
    });
    return count
}
const str= "lovelacelab";
console.log(countVowels(str));














