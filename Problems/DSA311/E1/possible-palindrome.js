//https://oj.masaischool.com/contest/6788/problem/301

function fun(str){
    let obj = {};
    for(let i=0; i<str.length; i++){
        obj[str[i]]==undefined 
        ? obj[str[i]]=1
        : obj[str[i]]++;
    }

    let count = 0;
    for(let x in obj){
        if(obj[x]%2!=0) count++;
    }

    console.log(count<=1 ? "Yes" : "No");

}

let str = "carerca";
fun(str);

