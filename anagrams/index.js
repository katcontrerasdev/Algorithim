// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  
  const aCharMap = buildCharMap(stringA)
  const bCharMap = buildCharMap(stringB)


  //comparing two strings to see if they have the same number of characters 
     //stringA.length !== stringB.length - build character map for strings
     //Object.key(aCharMap).length !== Object.key(bCharMap).length
     
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false
    }
  } 
  // return true
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str
    //regex 
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

//takes a string and creates an object to count keys and values within the string that you 
//pass to count keys and variables
function buildCharMap(str) {
  const charMap = {};
  //take cases and punction to normalize
  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    //if it exists add 1 or initialize at 1
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap

}

let stringA = 'rail safety'
let stringB = 'fairy tales'

console.log(anagrams(stringA, stringB))

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }
//
//   return true;
// }
//
// function buildCharMap(str) {
//   const charMap = {};
//
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//
//   return charMap;
// }
