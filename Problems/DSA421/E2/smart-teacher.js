// ==> https://oj.masaischool.com/contest/8021/problem/02

// aab aa#

let str1 = "aab";
let str2 = "aa#";

// let str1 = "ab#c";
// let str2 = "ad#c";
let n = str1.length

let stack = [];

for (let i = 0; i < n; i++) {
    if (stack.length > 0 && str1[i] == "#") {
        stack.pop();
    } else {
        stack.push(str1[i]);
    }
}

let stack2 = [];

for (let i = 0; i < n; i++) {
    if (stack2.length > 0 && str2[i] == "#") {
        stack2.pop();
    } else {
        stack2.push(str2[i]);
    }
}

console.log(stack.join() == stack2.join() ? "CORRECT" : "WRONG");
