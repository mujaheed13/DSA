// https://oj.masaischool.com/contest/8515/problem/101

function fun(a, b, c) {
  console.log(a <= b && b >= c ? "AC" : "No AC");
}

let [a, b, c] = [30, 30, 35];
fun(a, b, c);
