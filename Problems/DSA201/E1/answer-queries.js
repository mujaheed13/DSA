// https://oj.masaischool.com/contest/5659/problem/1-1

function fun(n, arr1, m, arr2) {
  let obj = {};

  for (let i = 0; i < n; i++) {
    obj[arr1[i]] = 1;
  }

  for (let i = 0; i < m; i++) {
    console.log(obj[arr2[i]] == undefined ? "NO" : "YES");
  }
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 5, 1];
let n = arr1.length;
let m = arr2.length;

fun(n, arr1, m, arr2);