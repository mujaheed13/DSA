// ? https://leetcode.com/problems/to-be-or-not-to-be/submissions/1109249159/?envType=study-plan-v2&envId=30-days-of-javascript

var expect = function (val) {
  return {
    toBe: function (val2) {
      if (val !== val2) {
        throw new Error("Not Equal");
      }
      return true;
    },
    notToBe: function (val2) {
      if (val === val2) {
        throw new Error("Equal");
      }
      return true;
    },
  };
};
