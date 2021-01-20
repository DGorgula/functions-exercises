//Question 1
function myReverse(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result = str[i]+result;
  }
  return result;
}

//Question 2
function allCombinations(str) {
  let combinations = [];
  
  //       recursive function to get one round of combinations.
  
  function smallComb(string) {
    if (string.length <= 0) {
      return [];
    }
    else{
      let shortenStr = string.substring(0, string.length-1);
      const result = smallComb(shortenStr);
      result.push(string);
      return  result;
    }
  }


    //    loop to call recursive function
    //    as much as the letter of the string.

  for (let i = 0; i < str.length; i++) {
    const shortenerString = str.substring(i, str.length);
      const partOfCombination = smallComb(shortenerString);
      console.log(partOfCombination);
      combinations = combinations.concat(partOfCombination);

  }
  return combinations;
}

//Question 3
function allCaps(str) {
  let newStr = "";
  arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) {
      newStr += ' ';
    }
    const firstLetter = arr[i][0].toUpperCase();
    const allOtherLetters = arr[i].slice(1);
    newStr += firstLetter + allOtherLetters;
  }
  return newStr;
}

//Question 4
function myPower(x, n) {

  return x**n;
}

//Question 5
function getFirstNotRepeating(str) {
  
  const strLetters = {};

  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

  for (let a = 0; a < str.length; a++) {
    if (!strLetters.hasOwnProperty(str[a])) {
      strLetters[str[a]] = 1;
    }
    else{
      strLetters[str[a]] += 1;
    }
  }

  lonelyLetters = getKeyByValue(strLetters, 1);

  return lonelyLetters[0];
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  const divisors = [];
  let summer = 0;

  for (let i = 1; i < num; i++) {
    if (num%i === 0){
      divisors.push(i);
    }
  }
    for (let i = 0; i < divisors.length; i++) {
      summer += divisors[i];
    }
  return num === summer;;
}

// *** Playground ***
  console.log( allCombinations("dog"));
// *** End of Playground ***
// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
