// ==> https://oj.masaischool.com/contest/5369/problem/501

let str = "masai";
let n = str.length;

let obj = {
    a : 0,
    b : 0,
    c : 0,
    d : 0,
    e : 0,
    f : 0,
    g : 0,
    h : 0,
    i : 0,
    j : 0,
    k : 0,
    l : 0,
    m : 0,
    n : 0,
    o : 0,
    p : 0,
    q : 0,
    r : 0,
    s : 0,
    t : 0,
    u : 0,
    v : 0,
    w : 0,
    x : 0,
    y : 0,
    z : 0
};

for(let i=0; i<n; i++){
    obj[str[i]]++;
}

for(let x in obj){
    if(obj[x]>0){
        console.log(`${x}-${obj[x]}`)
    }
}

