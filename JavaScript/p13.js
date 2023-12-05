// ? https://leetcode.com/problems/sleep/?envType=study-plan-v2&envId=30-days-of-javascript   

async function sleep(millis) {
    return new Promise(resolve => setTimeout(() => resolve("YES"), millis))
}