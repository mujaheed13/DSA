// ==> https://oj.masaischool.com/contest/7369/problem/05

// let arr = [1, 2, 3, 4, 6, 8, 5, 7] ==> No

let arr = [5, 1, 2, 4, 3];
let n = arr.length;

let stack = [];

let num = 1;

for (let i = 0; i < n; i++) {
  stack.push(arr[i]);
  while (stack.length >= 0 && stack[stack.length] == num) {
    stack.pop();
    num++;
  }
}

console.log(stack.length == 0 ? "YES" : "NO");
