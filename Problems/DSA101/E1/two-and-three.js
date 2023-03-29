// => https://oj.masaischool.com/contest/5369/problem/101
let num = 6;

for (let i = 1; i <= num; i++) {
  console.log(
    i % 2 == 0 && i % 3 == 0
      ? "Both"
      : i % 2 == 0
      ? "Two"
      : i % 3 == 0
      ? "Three"
      : "None"
  );
}
