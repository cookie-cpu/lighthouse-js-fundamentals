/*
a, e, i, o, and u.

if (word[letter] === "a" ||"e" ||"i" ||"o" ||"u"){
  
*/

const numberOfVowels = function(word) {
let index = 0;
  for (letter in word){
    if (word[letter] === "a"){
      index+=1
    } else if (word[letter] === "e"){
      index+=1
    } else if (word[letter] === "i"){
      index+=1
    } else if (word[letter] === "o"){
      index+=1
    } else if (word[letter] === "u"){
      index+=1
    }
  } return index
};


//TEST CASES
console.log(numberOfVowels("orange")); //3
console.log(numberOfVowels("lighthouse labs"));//5
console.log(numberOfVowels("aeiou"));//5
console.log(numberOfVowels("The quick brown fox jumps over the lazy dog"))//11
