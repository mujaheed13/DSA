// ? https://leetcode.com/problems/allow-one-function-call/?envType=study-plan-v2&envId=30-days-of-javascript

var once = function (fn) {
    let calls = 0;
    return function (...args) {
        calls++;
        return calls < 2 ? fn(...args) : undefined;
    }
};