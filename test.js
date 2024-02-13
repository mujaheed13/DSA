// let arr = [0, 1, 0, 0, 1, 0, 3, 5, 0, 12, 4, 5];
// let n = arr.length;
// let j = 0;
// for (let i = 0; i < n; ++i) {
//   if (arr[i] !== 0) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++;
//   }
// }

// let i = 0;
// let j = n - 1;

// while (i < j) {
//   if (arr[j] == 0) {
//     j--;
//   }
//   if (arr[i] != 0) {
//     i++;
//   } else {
//     let a = arr[i];
//     arr[i] = arr[j];
//     arr[j] = a;
//   }
// }

// console.log(arr);

let arr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let str = "mujaheed";

let ans = "";

for (let i = 0; i < str.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    console.log(ans + arr[j]);
    if (str[i] == arr[j]) {
      ans += arr[j];
      break;
    }
  }
}
