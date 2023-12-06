// ? https://leetcode.com/problems/timeout-cancellation/?envType=study-plan-v2&envId=30-days-of-javascript

var cancellable = function (fn, args, t) {
  let isCancelled = false;
  setTimeout(() => {
    if (!isCancelled) fn(...args);
  }, t);

  return () => {
    isCancelled = true;
  };
};
