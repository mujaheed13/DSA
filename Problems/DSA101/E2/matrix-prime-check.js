// ==> https://oj.masaischool.com/contest/5480/problem/301

function check(num) {
  if (num == 1) return false;

  let factors = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) factors++;
  }

  return factors > 2 ? false : true;
}

function fun(n, m, mat) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (check(mat[i][j])) {
        ans++;
      }
    }
  }
  console.log(ans);
}

let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let n = mat.length;
let m = mat[0].length;

fun(n, m, mat);
