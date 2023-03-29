// ==> https://oj.masaischool.com/contest/7519/problem/01

function fun(n, m, mat) {
  for (let i = 0; i < n; i++) {
    if (!check(mat, i, 0, n, m)) return false;
  }

  for (let i = 0; i < n; i++) {
    if (!check(mat, 0, i, n, m)) return false;
  }

  return true;
}

function check(mat, i, j, n, m) {
  let temp = mat[i][j];

  while (++i < n && ++j < m) {
    if (temp != mat[i][j]) return false;
  }

  return true;
}

let mat = [
  [1, 2, 3, 4],
  [5, 1, 2, 3],
  [9, 5, 1, 2],
];

let n = mat.length;
let m = mat[0].length;

console.log(fun(n, m, mat) ? "YES" : "NO");
