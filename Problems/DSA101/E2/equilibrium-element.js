// ==> https://oj.masaischool.com/contest/5480/problem/401

function fun(N, arr) {
  let rs = [0];
  let ls = [0];

  for (let i = 0; i < N; i++) {
    ls.push(ls[i] + arr[i]);
  }

  let y = 0;
  for (let i = N - 1; i >= 1; i--) {
    rs.push(rs[y++] + arr[i]);
  }

  rs.reverse();

  for (let i = 0; i < N; i++) {
    if (rs[i] == ls[i]) {
      console.log(i + 1);
      return;
    }
  }

  console.log(-1);
}

let arr = [3, 3, 5, 5, 1];
let n = arr.length;

fun(n, arr);
