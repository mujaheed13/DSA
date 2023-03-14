// ==> https://oj.masaischool.com/contest/5369/problem/201

let arr = [3, 3, 2, 9, 7];
let n = arr.length;

let min = Infinity;

for(let i=0; i<n; i++){
    if(min>arr[i]) min = arr[i];
}

for(let i=0; i<n; i++){
    if(arr[i]%min==0) arr[i]=-1;
}

console.log(arr);