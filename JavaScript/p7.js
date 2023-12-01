// ? https://leetcode.com/problems/array-reduce-transformation/submissions/1110163287/?envType=study-plan-v2&envId=30-days-of-javascript

var reduce = function (nums, fn, init) {
  let ans = init;

  for (let i = 0; i < nums.length; i++) {
    ans = fn(ans, nums[i]);
  }

  return ans;
};
