const randomString = "ABCBAHELLOHOWRACECARAREYOUILOVEUEVOLIIAMAIDOINGGOOD";

//If user doesnot provide input, will use the string declared above
const input = process.argv.slice(2).toString() || randomString;

const palindromes = function (str) {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      const substr = str.substring(i, j);

      if (substr.length > 1 && substr.split("").reverse().join("") === substr) {
        //add each palindrome as an object in an array along with position and length
        result.push({ substr, index: i, length: substr.length });
      }
    }
  }
  return result;
};

const displayPalindromesSortedByLength = function (unsortedPalindromes) {
  //if there are no palindromes in a given string
  if (!unsortedPalindromes.length) {
    console.log("No Palindromes in the given string");
    return;
  }
  //sort objects(palindromes) by property length
  const sortedPalindromes = unsortedPalindromes.sort(
    (a, b) => b.length - a.length
  );

  //display all objects(palindromes)
  for (const obj of sortedPalindromes) {
    console.log(`${obj.substr},${obj.index},${obj.length}`);
  }
};

const allPalindromes = palindromes(input);
displayPalindromesSortedByLength(allPalindromes);

module.exports = palindromes;
