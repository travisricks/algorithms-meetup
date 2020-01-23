/*
Example 1

Inputs: 'palindrome', 'emordnilap'
Output: true
Example 2

Inputs: 'string', 'gnirst'
Output: false
*/

function palindrome (string1, string2) {
    if (string1.length !== string2.length) {return false;}
    let i = 0;
    while (i <= string1.length) {
      if (string1[i-1] === string2[string2.length-i]) {
        i++
      } else
      return false;
    }
    return true;
  }
  
  console.log(palindrome("palindrome", "emordnilap")); // true
  console.log(palindrome("string", "gnirst")); // false
  console.log(palindrome("ab", "tewst")); // false
  
  