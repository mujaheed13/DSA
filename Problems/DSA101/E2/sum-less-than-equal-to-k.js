// ==> https://oj.masaischool.com/contest/5480/problem/101

function fun(arr, n, k) {
  let ans = 0;

  for (let i = 0; i < n; i++) {
    if(arr[i]<=k) ans+=arr[i];
  }
  console.log(ans);
}

let arr = [1, 2, 3, 4, 5];
let n = arr.length;
let k = 3;

fun(arr, n, k);

