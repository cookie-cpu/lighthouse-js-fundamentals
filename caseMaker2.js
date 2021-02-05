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

const pascalCase = function(input) {
  let output = "";
  if (input[0]) {
    output += input[0].toUpperCase();
  }
  for (let i = 1; i < input.length; i++) {
    if (input[i] === " ") {
      output += input[i + 1].toUpperCase();
      i++;
    } else {
      output += input[i];
    }
  } return output;
};

const snakeCase = function(input) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      let num = input[i];
      num = "_"
      output += num 
    } else {
      output += input[i];
    }
  } return output;
};

const kebabCase = function(input) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      let num = input[i];
      num = "-"
      output += num 
    } else {
      output += input[i];
    }
  } return output;
};


const makeCase = function(input, caseStlye) {
  if (caseStlye === "camel") {
    return camelCase(input);
  } else if (caseStlye === "pascal") {
    return pascalCase(input);
  } else if (caseStlye === "snake") {
    return snakeCase(input);
  } else if (caseStlye === "kebab") {
    return kebabCase(input);
  } else if (caseStlye === "title") {
    return ("title");
  } else if (caseStlye === "vowel") {
    return ("vowel");
  } else if (caseStlye === "consonant") {
    return ("consonant");
  } else if (caseStlye === "upper", "snake") {
    return ("upper snake");
  }
};

console.log("camelCase:                  ", makeCase("this is a string", "camel"));
console.log("PascalCase:                 ", makeCase("this is a string", "pascal"));
console.log("snake_case:                 ", makeCase("this is a string", "snake"));
console.log("kebab-case:                 ", makeCase("this is a string", "kebab"));
console.log("Title Case:                 ", makeCase("this is a string", "title"));
console.log("vowelCase:                  ", makeCase("this is a string", "vowel"));
console.log("consonantCase:              ", makeCase("this is a string", "consonant"));
console.log("upperCase and snakeCase:    ", makeCase("this is a string", ["upper", "snake"]));
