// ? https://leetcode.com/problems/create-hello-world-function/?envType=study-plan-v2&envId=30-days-of-javascript

var createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

console.log(createHelloWorld()("asdfasdf"));
