// ==> https://oj.masaischool.com/contest/7369/problem/03


function fun(n){
    if(n<0) return 0;
    if(n==0) return 1;
    return fun(n-1)+fun(n-2)+fun(n-5);
}

let n = 4;

console.log(fun(n));