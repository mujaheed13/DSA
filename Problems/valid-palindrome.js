// ? https://leetcode.com/problems/valid-palindrome/

// ! Using Two Pointers

function validPalindrome(s) {
  let str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  if (str == "") {
    return true;
  }

  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i++] != str[j--]) {
      return false;
    }
  }

  return true;
}

let s = "race car";

console.log(validPalindrome(s));
