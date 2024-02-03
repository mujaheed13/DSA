// ? https://oj.masaischool.com/contest/5393/problem/09

let str = "aabefe";
let n = str.length;

let noOfVowels = 0;

for (let i = 0; i < n; i++) {
  if (
    str[i] === "a" ||
    str[i] === "e" ||
    str[i] === "i" ||
    str[i] === "o" ||
    str[i] === "u"
  ) {
    noOfVowels++;
  }
}

console.log(noOfVowels >= n / 2 ? "True" : "False");
