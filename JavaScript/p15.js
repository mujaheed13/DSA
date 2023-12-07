// ? https://leetcode.com/problems/interval-cancellation/submissions/1114447364/?envType=study-plan-v2&envId=30-days-of-javascript

var cancellable = function (fn, args, t) {
  fn(...args);
  const timer = setInterval(() => fn(...args), t);

  const cancelFn = () => clearInterval(timer);
  return cancelFn;
};
