let arr = [1, 1, 2, 3, 4, 4, 3, 2, 5];

let ans = 0;

for (let i = 0; i < arr.length; i++) {
  ans ^= arr[i];
}

console.log(ans);
