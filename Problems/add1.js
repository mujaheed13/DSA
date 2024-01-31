// Print the elements of the array on a single line, by adding 1 to each element
let n = 5;
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < n; i++) {
  arr[i] = arr[i] + 1;
}

console.log(arr.join(" "));
