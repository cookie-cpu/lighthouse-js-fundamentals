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

const pascalCase = function(input){
  let output = "";
  if (input[0]){
    output += input[0].toUpperCase();
  }
  for (let i = 1; i < input.length; i++){
    if (input[i] === " "){
      output += input[i+1].toUpperCase();
      i++
    } else {
      output += input[i]
    }
  } return output
}


const makeCase = function(input, caseStlye) {
  if (caseStlye === "camel"){
    return camelCase(input)
  } else if (caseStlye === "pascal"){
    return pascalCase(input)
  } else if (caseStlye === "snake"){
    return("snake")
  } else if (caseStlye === "kebab"){
    return("kebab")
  }else if (caseStlye === "title"){
    return("title")
  }else if (caseStlye === "vowel"){
    return("vowel")
  }else if (caseStlye === "consonant"){
    return("consonant")
  }else if (caseStlye === "upper", "snake"){
    return("upper snake")
  }
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
