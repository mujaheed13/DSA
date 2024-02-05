// ? https://leetcode.com/problems/valid-anagram/

let s = "anagram";
let t = "nagaram";

function fun(s, t) {
  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < s.length; i++) {
    !obj1[s[i]] ? (obj1[s[i]] = 1) : obj1[s[i]]++;
  }
  for (let i = 0; i < t.length; i++) {
    !obj2[t[i]] ? (obj2[t[i]] = 1) : obj2[t[i]]++;
  }

  for (let x in obj1) {
    if (!obj2[x] || obj1[x] != obj2[x]) {
      return false;
    }
  }
  for (let x in obj2) {
    if (!obj1[x] || obj1[x] != obj2[x]) {
      return false;
    }
  }

  return true;
}

console.log(fun(s, t));
