// ? https://leetcode.com/problems/filter-elements-from-array/?envType=study-plan-v2&envId=30-days-of-javascript

var filter = function (arr, fn) {
  const ans = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) ans.push(arr[i]);
  }
  return ans;
};
