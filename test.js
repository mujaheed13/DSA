// https://oj.masaischool.com/contest/5568/problem/202
function fun(arr, n) {
    let min = Infinity;

    for(let i=0; i<n; i++){
        min = Math.min(min, arr[i]);
    }

    for(let i=0; i<n; i++){
        if(arr[i]>min) arr[i]=-1;
    }

    console.log(arr);

}

let arr = [1, 2, 3];
let n = arr.length;
fun(arr, n);