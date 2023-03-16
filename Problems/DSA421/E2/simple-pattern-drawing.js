// ==> https://oj.masaischool.com/contest/8021/problem/01

let n = 3;
let m = 3;

let mat = new Array(n);

for (let i = 0; i < n; i++) {
  mat[i] = new Array(m).fill(".");
}

let a = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (i % 2 == 0) {
      mat[i][j] = "#";
    }
  }
}

for (let i = 0; i < n; i++) {
  if (i % 2 != 0 && a % 2 == 0) {
    mat[i][m - 1] = "#";
    a++;
  } else if (i % 2 != 0 && a % 2 == 1) {
    mat[i][0] = "#";
    a++;
  }
}

for (let i = 0; i < n; i++) {
  console.log(mat[i].join(""));
}
