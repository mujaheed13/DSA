// Maximum sum of all the subarrays having size of k

function fun(arr, n, k){

    let ans = 0;

    for(let i=0; i<k; i++){
        ans+=arr[i];
    }

    let win_sum = ans;

    for(let i=k; i<n; i++){
        win_sum=win_sum-arr[i-k]+arr[i];
        ans=Math.max(ans, win_sum);
    }

    console.log(ans);

    


}

let arr = [1, 2, 3, 4, 5];
let n = arr.length;
let k = 3;
fun(arr, n, k);