// https://oj.masaischool.com/contest/5782/problem/4-2

function rotateBy180(N, matrix) {
  for (let i = N - 1; i >= 0; i--) {
    let a = "";
    for (let j = N - 1; j >= 0; j--) {
      a += matrix[i][j] + " ";
    }
    console.log(a);
  }
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let n = matrix.length;
rotateBy180(n, matrix);