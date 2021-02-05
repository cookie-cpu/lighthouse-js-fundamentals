const camelCase = function(input) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      output += input[i + 1].toUpperCase();
      i++;
    } else {
      output += input[i];
    }
  } return output;
};

console.log(camelCase("this is a string")); //thisIsAString
console.log(camelCase("loopy lighthouse")); //loopyLighthouse
console.log(camelCase("supercalifragalisticexpialidocious")); //supercalifragalisticexpialidocious
console.log(camelCase("this should be in camel case")); //thisShouldBeInCamelCase

