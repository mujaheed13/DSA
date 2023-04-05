// https://oj.masaischool.com/contest/5659/problem/4-1
function ACM_ICPC_India_Rank(N, countriesArr) {
  for (let i = 0; i < N; i++) {
    if (countriesArr[i] == "India") {
      console.log(i + 1);
    }
  }
}
