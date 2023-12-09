// ? https://leetcode.com/problems/is-object-empty/?envType=study-plan-v2&envId=30-days-of-javascript

var isEmpty = function (obj) {
  return JSON.stringify(obj).length == 2;
};
