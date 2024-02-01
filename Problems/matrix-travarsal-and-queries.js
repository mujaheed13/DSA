// You are given a matrix of size n x m , and two types of queries are to be performed on this matrix. The two types of queries are

// q = 1, for this type of query, the matrix is to be traversed, as shown in Fig. 1

// q = 2, for this type of query, the matrix is to be traversed as shown in Fig. 2

let ans = "";
if(q==1){
    for(let i=0; i<N; i++){
        if(i%2==0){
            for(let j=0; j<N; j++){
             ans+=arr[i][j]+=" ";
            }
        } else {
            for(let j=N-1; j>=0; j--){
                ans+=arr[i][j]+=" ";
            }
        }
    }
} else {
    for(let i=0; i<N; i++){
        if(i%2==0){
            for(let j=N-1; j>=0; j--){
             ans+=arr[i][j]+=" ";
            }
        } else {
            for(let j=0; j<N; j++){
                ans+=arr[i][j]+=" ";
            }
        }
    }
}
console.log(ans);