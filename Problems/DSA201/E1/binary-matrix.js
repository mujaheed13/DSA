function binaryMatrix(N, M, matrix) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (matrix[i][j] == 1) {
        matrix[i][j] = 0;
      } else {
        matrix[i][j] = 1;
      }
    }
  }
  for (let i = 0; i < N; i++) {
    console.log(matrix[i].join(" "));
  }
}


let matrix = [
    [1, 0],
    [0, 1],
    [0, 0]
];
let N = matrix.length;
let M = matrix[0].length;
binaryMatrix(N, M, matrix)