//https://oj.masaischool.com/contest/5659/problem/3-1
function sumWithoutBorders(N, M, matrix) {
  let ans = 0;
  for (let i = 1; i < N - 1; i++) {
    for (let j = 1; j < M - 1; j++) {
      ans += matrix[i][j];
    }
  }

  console.log(ans);
}

let matrix = [
  [1, 3, 4, 3],
  [7, 5, 7, 5],
  [1, 1, 7, 2],
  [11, 33, 6, 8],
];

let n = matrix.length;
let m = matrix[0].length;

sumWithoutBorders(n, m, matrix);
