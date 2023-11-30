// ? https://leetcode.com/problems/counter-ii/submissions/1109657077/?envType=study-plan-v2&envId=30-days-of-javascript

var createCounter = function (init) {
  let num = init;
  return {
    increment: function () {
      num++;
      return num;
    },
    decrement: function () {
      num--;
      return num;
    },
    reset: function () {
      num = init;
      return num;
    },
  };
};
