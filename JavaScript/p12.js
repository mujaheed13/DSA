// ? https://leetcode.com/problems/add-two-promises/?envType=study-plan-v2&envId=30-days-of-javascript

var addTwoPromises = async function (promise1, promise2) {
    let p1 = await promise1;
    let p2 = await promise2;
    return p1 + p2
};
