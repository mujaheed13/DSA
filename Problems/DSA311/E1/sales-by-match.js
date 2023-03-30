// https://oj.masaischool.com/contest/6788/problem/201

function fun(n, arr){
    let obj = {};

    for(let i=0; i<n; i++){
        obj[arr[i]] == undefined 
        ?  obj[arr[i]] = 1
        : obj[arr[i]]++;
    }

    let ans = 0;

    for(let x in obj){
        if(obj[x]%2==0){
            obj[x] = (obj[x]/2);
        } else if(obj[x]>=3){
            obj[x] = ((obj[x]-1)/2);
        }
    }

    console.log(ans);
}



let arr = [ 10, 20, 20, 10, 10, 30, 50, 10, 20 ];
let n = arr.length;
fun(n, arr)