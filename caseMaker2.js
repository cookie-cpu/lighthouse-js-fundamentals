const camelCase = function(input) {
  let output = "";
  for (let i = 0; i < input.length; i++){
    if (input[i] === " "){
      output += input[i+1].toUpperCase();
      i++;
    } else {
      output += input[i]
    }
  } return output  
};

const makeCase = function(input, caseStlye) {
  if (caseStlye === "camel"){
    return camelCase(input)

  }
  // Put your solution here
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
