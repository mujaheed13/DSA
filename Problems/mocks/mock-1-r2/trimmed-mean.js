// https://oj.masaischool.com/contest/8515/problem/201

function fun(n, arr){
    
    arr.sort((a, b)=>{
        return a-b;
    });
    
    let ans = 0;
    let c = 0;
    
    for(let i=n; i<arr.length-n; i++){
      ans+=arr[i];
      c++;
    }
    
    console.log(Math.floor(ans/c));
    
}

let arr = [10, 100, 20, 50, 30];
let n = 1;

fun(n, arr);