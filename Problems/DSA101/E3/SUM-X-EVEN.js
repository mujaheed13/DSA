//https://oj.masaischool.com/contest/5568/problem/301
function fun(mat, n) {
    let ans = 0;

    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(i-j==0 || i+j == n-1){
                ans+=mat[i][j];
            }
        }
    }

    console.log(ans%2==0 ? "yes" : "no"); 

}

let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let n = mat.length;
let m = mat[0].length;

fun(mat, n);
