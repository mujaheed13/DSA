// ? https://leetcode.com/problems/function-composition/?envType=study-plan-v2&envId=30-days-of-javascript

var compose = function (functions) {

    return function (x) {
        let ans = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            ans = functions[i](ans);
        }
        return ans;
    }
};
