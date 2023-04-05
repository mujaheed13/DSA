// https://oj.masaischool.com/contest/5782/problem/2

function fun(str) {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = 1;
  }

  let ans = "";

  for (let x in obj) {
    ans += x;
  }

  console.log(ans);
}

let str = "Mohammad Mujaheed";

str = str.split(" ").join("");

fun(str);
