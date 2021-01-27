const urlEncode = function(text) {
  let url = [];
  for (letter in text){
    if (text[letter] === ' '){
      url.push('%20')
    } else url.push(text[letter])
  } console.log(url)
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
