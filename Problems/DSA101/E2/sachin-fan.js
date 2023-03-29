// ==> https://oj.masaischool.com/contest/5480/problem/202

function fun(arr, n) {
  let ans = 0;

  for (let i = 0; i < n; i++) {
    let sub_arr = [];
    for (let j = i; j < n; j++) {
      sub_arr.push(arr[j]);
      if (sub_arr.includes(10)) {
        ans++;
      }
    }
  }

  console.log(ans);
}

let arr = [1, 2, 10];
let n = arr.length;
fun(arr, n);
