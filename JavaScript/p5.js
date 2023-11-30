// ? https://leetcode.com/problems/apply-transform-over-each-element-in-array/?envType=study-plan-v2&envId=30-days-of-javascript

var map = function (arr, fn) {
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    let rv = fn(arr[i], i);
    ans.push(rv);
  }
  return ans;
};
